const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;
const mysql = require('mysql2');
const bcrypt = require('bcrypt')

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
    const saltRounds = 12;
    const query = 'INSERT INTO users (name, lasName, email, vinculationCode, passwordValue) VALUES (?, ?, ?, ?, ?)';
    bcrypt.hash(password, saltRounds, (err, hash) => {
        if(err){
            console.error('Error al hashear el password: ', err);
        };
        connection.query(query, [name, lastName, email, vinculationCode, hash], (error, results) => {
            if (error) {
                console.error(error);
                res.status(500).send('Error al insertar usuario');
                return;
            }
            res.status(201).send(`Usuario insertado con ID: ${results.insertId}`);
        });
    });
});
app.listen(PORT, '0.0.0.0', () => {
    console.log('escuchando');
});