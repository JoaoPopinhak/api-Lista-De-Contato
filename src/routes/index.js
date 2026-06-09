import express from 'express';
import { readFile, writeFile } from 'fs/promises';


const routers = express.Router();


const dataPath = './data/list.txt'
routers.post('/contato', async (req, res) => {
    const {name} = req.body || {};

    if(!name){
        return res.json({error: 'Nome não preenchido'});
    }
    //Processamento dos dados
    let listDados = [];
    try{
        const dados = await readFile(dataPath, 'utf-8');
        listDados = dados.split('\n');
    }catch(err){}
    listDados.push(name); 
    
    await writeFile(dataPath, listDados.join('\n'));;
    
    res.status(201).json({contato: name});
});

routers.get('/contatos', async (req,res) => {
    let listDados = [];
    try{
        const dados = await readFile(dataPath, 'utf-8');
        listDados = dados.split('\n')
    }catch(err){}

    res.json({Contatos: listDados});
});

routers.delete('/contato', async (req,res) => {
    const { name } = req.query;

    if(!name){
        return res.json({error: 'Precisa informar o nome que deseja deletar'});
    }

    let listDados = [];
    try{
        const dados = await readFile(dataPath, 'utf-8');
        listDados = dados.split('\n');
    }catch(err){}

    listDados = listDados.filter(item => (item.toLowercase() !== name.toLowerCase()));

    await writeFile(dataPath, listDados.join('\n'));

    res.json({message: `Contato ${name} deletado com sucesso`});
});

export default routers;