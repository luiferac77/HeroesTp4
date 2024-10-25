import express from 'express';
import { verTodosLosHeroes } from './heroeController.mjs';

const app = express();
const port = 3000;

app.get('/heroe', verTodosLosHeroes); //siempre en el método get va o una función anónima con req y res como parámetro o una función que no sea anónima peor con los mismos parámetros

app.listen(port, () => {
    console.log(`servidor corriendo en http://localhost:${port}`);
});