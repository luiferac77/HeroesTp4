//import { HeroeModel } from "../models/heroeModel.mjs";
import { obtenerTodosLosHeroes, ObtenerHeroesPorId, ObtenerHeroesMayoresDe30} from "../services/heroeService.mjs";
import { renderizarHeroe } from "../views/heroeView.mjs";

//const heroeModel = new HeroeModel();

export function verTodosLosHeroesController(req, res){
    //try {
        const heroe = obtenerTodosLosHeroes(); //obtengo el mensaje del modelo
        renderizarHeroe(res, heroe); //muestro a través de la capa view el mensaje
    //} catch (error) {
      //  res.status(500).send(error);
   // }
}

export function obtenerHeroesPorIdController(req, res){
    const {id} = req.params;
    const heroe = ObtenerHeroesPorId(parseInt(id));
    if(heroe){
        renderizarHeroe(res, heroe)
    } else {
        res.status(404).send({mensaje: "Heroe no encontrado"});
    }
}

export function ObtenerHeroesMayoresDe30Controller(req, res){
//const {edad, planetaOrigen, poder} = req.query;
const heroe = ObtenerHeroesMayoresDe30();
if(heroe){
    renderizarHeroe(res, heroe);
} else {
    res.status(404).send({mensaje: "No se encontraron heroes con los criterios especificados"});
}
}
