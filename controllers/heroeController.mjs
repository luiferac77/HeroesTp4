import { HeroeModel } from "../models/heroeModel.mjs";
import { mostrarHeroe } from "../views/heroeView.mjs";

const heroeModel = new HeroeModel();

export function verTodosLosHeroes(req, res){
    try {
        const heroe = heroeModel.obtenerTodos(); //obtengo el mensaje del modelo
        mostrarHeroe(res, heroe); //muestro a través de la capa view el mensaje
    } catch (error) {
        res.status(500).send('Error al leer el archivo');
    }
}
