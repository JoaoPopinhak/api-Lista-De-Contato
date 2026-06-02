import express from 'express';

const routers = express.Router();

routers.get('/', (req, res) => {
    res.json({description: 'API de Lista de Contatos'});
});

export default routers;