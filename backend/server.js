const express = require('express');
const cors = require('cors');
const app = express();
const mysql = require('mysql2/promise');
const bcrypt = require('bcrypt');
const mail = require('@sendgrid/mail');
const {v4: uuidv4} = require('uuid');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const PORT = 5000;

app.use(express.json());
app.use(cors());

let connection;
(async () => {
    try {
        connection = await mysql.createConnection({
        host: process.env.DBHOST,
        user: process.env.DBUSER,
        password: process.env.DBPASSWORD,
        database: process.env.DB
        });
        console.log('Conectado a MySQL!');
    } catch (err) {
        console.error('Error conectando a MySQL:', err);
    }
})();

app.post('/login', async(req, res) => {
    const {user, password} = req.body;
    const query = 'SELECT passwordValue, email, userName, name, lastName, vinculationCode FROM users WHERE verified = true AND userName = ?';
    try{
        const [result] = await connection.execute(query, [user]);
        const hash = result[0].passwordValue;
        const payload = {
            id: result[0].id,
            user: result[0].userName,
            name: result[0].name,
            lastName: result[0].lastName,
            institution: result[0].vinculationCode
        }; 
        console.log(result[0]);
        const jwtKey = process.env.JWTKEY;
        bcrypt.compare(password, hash, (err, resp) => {
            if (err) {
                console.error(err);
                return res.status(500).send('Error al comparar passwords');
            }
            if(resp){
                console.log('acceso permitido');
                return res.send(JSON.stringify(jwt.sign(payload, jwtKey, {expiresIn: '1h'})));
            }else{
                console.log('acceso denegado');
                return res.status(401).send(JSON.stringify('acceso denegado'));
            }
        });
    }catch(error){
        console.error(error);
        return res.status(500).send('Error al buscar el usuario');
    }
});
app.post('/create-user', (req, res) => {
    const {name, lastName, email, vinculationCode, password} = req.body;
    const token = uuidv4();
    const saltRounds = 12;
    const experitationTime = new Date(Date.now() + 1 * 60 * 1000);
    const query = 'INSERT INTO users (userName, name, lastName, email, vinculationCode, passwordValue, verificationToken, timeExperitation, verified) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';
    async function VerificateUser(createUser){
        const verificateQuery = 'SELECT userName FROM users WHERE userName = ?';
        try{
            const [result] = await connection.execute(verificateQuery, [createUser]);
            if(result.length > 0){
                return true;
            }else{
                return false;
            }
        }catch(err) {
            console.error('Error al buscar el usuario: ', err);
            return false;
        }
    }
    async function CreateUser(names, lastNames){
        let base = `${names.trim().split(/\s+/)[0]}.${lastNames.trim().split(/\s+/)[0]}`
                        .normalize("NFD")
                        .replace(/[\u0300-\u036f]/g, "")
                        .toLowerCase();
        let result = base;
        let count = 1; 
        while(await VerificateUser(result)){
            result = `${result}${count}`;
            count++;
        }
        return result;
    }
    bcrypt.hash(password, saltRounds, async (err, hashPassword) => {
        if(err){
            return console.error('Error al hashear el password: ', err);
        }
        try{
            const user = await CreateUser(name, lastName);
            connection.execute(query, [user, name, lastName, email, vinculationCode, hashPassword, token, experitationTime, false]);
            console.log('usuario insertado'); 
            const mensage = {
                to: email,
                from: process.env.EMAIL,
                templateId: process.env.EMAILTEMPLATEID,
                subject: 'Verificacion de correo',
                dynamic_template_data: {
                    Sender_Name: name,
                    link: `http://localhost:5000/verificate-email?token=${token}`,
                }
            };
            mail.setApiKey(process.env.SENDGRID_API_KEY);
            console.log(mensage);
            mail.send(mensage)
                .then(() => {
                    console.log('email enviado'); 
                    return res.status(201).send('Email enviado');
                })
                .catch((error) => {
                    console.error(error);
                    return res.status(500).send('Usuario creado, pero falló el envío del correo');
                });
        }catch(error){
            console.error(error);
            return res.status(500).send('Error al insertar usuario');
        }
    });
});
app.get('/verificate-email', async(req, res) => {
    const token = req.query.token;
    const searchQuery = 'SELECT verificationToken, timeExperitation FROM users WHERE verificationToken = ? AND verified = false';
    const updateQuery = 'UPDATE users SET verificationToken = NULL, verified = 1, timeExperitation = NULL WHERE verificationToken = ?';
    if (!token){
        return res.status(400).send('Bad request');
    }
    try{
        const [result] = await connection.execute(searchQuery, [token])
        if (!Array.isArray(result) || result.length === 0){
            console.log('token invalido');
            return res.status(403).send('token invalido');
        }
        const expirationTime = new Date(result[0].timeExperitation);
        if (Date.now() <= expirationTime.getTime()){
            try{
                await connection.execute(updateQuery, [token])
                console.log('encontrado y vericado');
                return res.status(200).send('encontrado y vericado');
            }catch(err){
                console.error(err);
                return res.status(500).send('Error al actualizar el token');
            }
        }else{
            return res.status(410).send('token expirado');
        }
    }catch(error){
        console.error(error);
        return res.status(404).send('Error al buscar el token');
    }
});
app.post('/schedule', async(req, res) => {
    const {code, grade} = req.body;
    console.log(req.body);
    const query = 'SELECT users.name, users.lastName, schedules.weekDay, schedules.startDayTime, schedules.endDayTime, schedules.duration, schedules.Subject FROM schedules JOIN users ON schedules.teacherId = users.userName WHERE InstitutionCode = ? AND grade = ?';
    try{
        const [result] = await connection.execute(query, [code, grade]);
        console.log([result]);
        return res.status(200).json(result);
    }catch(error){
        console.error(error);
    }
});
app.listen(PORT, '0.0.0.0', () => {
    console.log('escuchando');
});