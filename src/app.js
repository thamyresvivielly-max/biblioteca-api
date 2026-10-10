const express = require('express');
const sequelize = require('./config/database');
const autorRoutes = require('./routes/autorRoutes');
const livroRoutes = require('./routes/livroRoutes');
const categoriaRoutes = require('./routes/categoriaRoutes');
require('./models');

const app = express();

app.use(express.json());

app.use('/autores', autorRoutes);
app.use('/livros', livroRoutes);
app.use('/categorias', categoriaRoutes);


sequelize.sync()
    .then(() => {
        console.log('Banco de dados sincronizado.');
    })
    .catch((error) => {
        console.error('Erro ao sincronizar o banco:', error);
    });

app.get('/', (req, res) => {
    res.json({
        mensagem: 'API Biblioteca funcionando!'
    });
});

module.exports = app;