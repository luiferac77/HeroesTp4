import fs from 'fs';
//import {readFileSync} from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import HeroesDataSource from './heroesDataSource.mjs';
import { HeroeModel } from '../models/heroeModel.mjs'; //importo el modelo para obtener los datos

const __filaname = fileURLToPath(import.meta.url); //ruta del archivo en el que estoy trabajando
const __dirname = path.dirname(__filaname); //ruta del directorio donde se encuentra el archivo
//const __filePath = path.join(__dirname, '../superheroes.txt');

export default class HeroesRepository extends HeroesDataSource{
    constructor(){
        super();
        this.filePath = path.join(__dirname, '../superheroes.txt');
    }
    obtenerTodos(){
        const data = fs.readFileSync(this.filePath, 'utf-8')
        return JSON.parse(data);
    }
}