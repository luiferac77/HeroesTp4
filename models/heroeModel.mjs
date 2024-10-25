import fs, { readFileSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filaname = fileURLToPath(import.meta.url); //ruta del archivo en el que estoy trabajando
const __dirname = path.dirname(__filaname); //ruta del directorio donde se encuentra el archivo
const __filePath = path.join(__dirname, '../superheroes.txt');

export class HeroeModel{
    obtenerTodos(){
        const data = readFileSync(__filePath, 'utf-8')
        return JSON.parse(data);
    }
}