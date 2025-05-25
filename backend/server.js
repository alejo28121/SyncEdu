const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;
const mysql = require('mysql2');

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

app.get('/login', (req, res) => {
    res.send('Servidor funcionando');
});
app.post('/create-user', (req, res) => {
    const {name, lastName, email, vinculationCode, password} = req.body;
    const query = 'INSERT INTO users (name, lasName, email, vinculationCode, passwordValue) VALUES (?, ?, ?, ?, ?)';
    connection.query(query, [name, lastName, email, vinculationCode, password], (error, results) => {
        if (error) {
        console.error(error);
        res.status(500).send('Error al insertar usuario');
        return;
        }
        res.status(201).send(`Usuario insertado con ID: ${results.insertId}`);
    });
})
app.listen(PORT, '127.0.0.1', () => {
    console.log('escuchando');
});