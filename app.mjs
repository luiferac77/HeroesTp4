import express from 'express';
import { obtenerHeroesPorIdController, verTodosLosHeroesController, ObtenerHeroesMayoresDe30Controller} from './controllers/heroeController.mjs';

const app = express();
const port = 3000;

app.use(express.json());

app.get('/heroes', verTodosLosHeroesController); //siempre en el método get va o una función anónima con req y res como parámetro o una función que no sea anónima peor con los mismos parámetros
app.get('/heroes/:id', obtenerHeroesPorIdController);
app.get('/mayoresde30', ObtenerHeroesMayoresDe30Controller);

app.listen(port, () => {
    console.log(`servidor corriendo en http://localhost:${port}`);
});