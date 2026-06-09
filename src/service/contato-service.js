import { readFile, writeFile } from "fs/promises";

const dataPath = './data/list.txt';
export const getContato = async () => {
     let listDados = [];
        try{
            const dados = await readFile(dataPath, 'utf-8');
            listDados = dados.split('\n');
        }catch(err){}

        return listDados;
};

export const createContato = async (name) => {
    let listDados = await getContato();
    listDados.push(name);
    await writeFile(dataPath, listDados.join('\n'));
};

export const deleteContato = async (name) => {
    let listDados = await getContato();
    listDados = listDados.filter(item => (item.toLowerCase() !== name.toLowerCase()));
    await writeFile(dataPath, listDados.join('\n'));
};