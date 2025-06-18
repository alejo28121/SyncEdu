const express = require('express');
const cors = require('cors');
const app = express();
const mysql = require('mysql2');
const bcrypt = require('bcrypt');
const mail = require('@sendgrid/mail');
const {v4: uuidv4} = require('uuid');
require('dotenv').config();
const PORT = 5000;


app.use(express.json());
app.use(cors());

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'A2572007',
    database: 'users'
});

connection.connect(err => {
    if (err) {
        console.error('Error conectando a MySQL:', err);
        return;
    }
    console.log('Conectado a MySQL!');
});

app.post('/login', (req, res) => {
    const {user, password} = req.body;
    const query = 'SELECT passwordValue FROM users WHERE email = ?'
    connection.query(query, [user], (error, result) => {
        const hash = result[0].passwordValue;
        if (error) {
            console.error(error);
            res.status(500).send('Error al buscar el usuario');
            return;
        }
        bcrypt.compare(password, hash, (err, resp) => {
            if (err) {
                console.error(error);
                res.status(500).send('Error al comparar passwords');
                return;
            }
            if(resp){
                console.log('acceso permitido');
            }else{
                console.log('acceso denegado');
            }
        });
    });
});
app.post('/create-user', (req, res) => {
    const {name, lastName, email, vinculationCode, password} = req.body;
    const token = uuidv4();
    const saltRounds = 12;
    const experitationTime = new Date(Date.now() + 1 * 60 * 1000);
    const query = 'INSERT INTO users (userName, name, lastName, email, vinculationCode, passwordValue, verificationToken, timeExperitation, verified) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';
    function VerificateUser(createUser){
        const verificateQuery = 'SELECT userName FROM users WHERE userName = ?'
    }
    function CreateUser(names, lastNames){
        return `${name.trim().split(/\s+/)[0]}.${lastName.trim().split(/\s+/)[0]}`
                        .normalize("NFD")
                        .replace(/[\u0300-\u036f]/g, "")
                        .toLowerCase();
    }
    bcrypt.hash(password, saltRounds, (err, hashPassword) => {
        if(err){
            return console.error('Error al hashear el password: ', err);
        }
        connection.query(query, [user, name, lastName, email, vinculationCode, hashPassword, token, experitationTime, false], (error, results) => {
            if (error) {
                console.error(error);
                res.status(500).send('Error al insertar usuario');
                return;
            }
            console.log('usuario insertado'); 
            const mensage = {
                to: email,
                from: 'grajalesvargasalejandro@gmail.com',
                templateId: 'd-a713cb480a2345ba81d860100ff2349e',
                subject: 'Verificacion de correo',
                dynamic_template_data: {
                    Sender_Name: name,
                    link: `http://localhost:5000/verificate-email?token=${token}`,
                }
            };
            mail.setApiKey(process.env.SENDGRID_API_KEY);
            mail.send(mensage)
                .then(() => {
                    console.log('email enviado'); 
                    return res.status(201).send('Email enviado');
                })
                .catch((error) => {
                    console.error(error);
                    return res.status(500).send('Usuario creado, pero falló el envío del correo');
                });
        });
    });
});
app.get('/verificate-email', (req, res) => {
    const token = req.query.token;
    const searchQuery = 'SELECT verificationToken, timeExperitation FROM users WHERE verificationToken = ? AND verified = false';
    const updateQuery = 'UPDATE users SET verificationToken = NULL, verified = 1, timeExperitation = NULL WHERE verificationToken = ?';
    if (!token){
        return res.status(400).send('Bad request');
    }
    connection.query(searchQuery, [token], (error, result) => {
        if (error) {
            console.error(error);
            return res.status(404).send('Error al buscar el token');
        }
        console.log(result);
        if (!Array.isArray(result) || result.length === 0){
            console.log('token invalido');
            return res.status(403).send('token invalido');
        }
        const expirationTime = new Date(result[0].timeExperitation);
        if (Date.now() <= expirationTime){
            connection.query(updateQuery, [token], (err, result) => {
                if (err) {
                    console.error(err);
                    return res.status(500).send('Error al actualizar el token');
                }
                console.log('encontrado y vericado');
                return res.status(200).send('encontrado y vericado');
            });
        }else{
            return res.status(410).send('token expirado');
        }
    });
});
app.listen(PORT, '0.0.0.0', () => {
    console.log('escuchando');
});