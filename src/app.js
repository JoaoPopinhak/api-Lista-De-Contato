import express from 'express';
import routers from './routes/index.js';

const app = express();

app.use('/', routers);

app.listen(3000, () => {

    console.log('Servidor rodando...');

});