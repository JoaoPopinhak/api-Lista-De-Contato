import express from 'express';
import helmet from 'helmet';
import routers from './routes/index.js';

//Criando o servidor
const app = express();
//Configurações
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({extended: true}));


//Rotas
app.use('/', routers);

app.listen(3000, () => {
    console.log('Servidor rodando...');
});