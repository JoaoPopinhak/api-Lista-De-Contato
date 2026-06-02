import express from 'express';
import routers from './routes/index.js';

const app = express();

app.use('/', routers);

app.listen(3000, () => {



//teste






    console.log('Servidor rodando...');

});