const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cors());

app.get('/login', (req, res) => {
    res.send('Servidor funcionando');
});
app.listen(PORT, '127.0.0.1', () => {
    console.log('escuchando');
});