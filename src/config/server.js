module.exports = () => {
    const express = require('express');
    const consign = require('consign');
    const cors = require('cors');

    // Variável do express
    var app = express();

    // Cors
    app.use(cors());

    // Configura para reconhecer body em JSON
    app.use(express.json());

    // Adiciona as rotas automáticamente
    consign()
        .include('./src/routes')
        .into(app);
    return app;
};