import express from 'express';
import { createContato, deleteContato, getContato } from '../service/contato-service.js';

const routers = express.Router();

routers.post('/contato', async (req, res) => {
    const {name} = req.body || {};

    if(!name){
        return res.json({error: 'Nome não preenchido'});
    }

    await createContato(name);

    res.status(201).json({contato: name});
});

routers.get('/contatos', async (req,res) => {
    let listDados = await getContato();
    res.json({Contatos: listDados});
});

routers.delete('/contato', async (req,res) => {
    const { name } = req.query;

    if(!name){
        return res.json({error: 'Precisa informar o nome que deseja deletar'});
    }

    await deleteContato(name);

    res.json({message: `Contato ${name} deletado com sucesso`});
});

export default routers;