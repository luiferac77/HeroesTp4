import HeroesRepository from '../repository/heroesRepository.mjs'; // Cambia la importación

const repository = new HeroesRepository(); // Cambia HeroesDataSource por HeroesRepository

export function obtenerTodosLosHeroes(){
    const heroes = repository.obtenerTodos();
    return heroes;
}

export function ObtenerHeroesPorId(id){
    const heroes = repository.obtenerTodos();
    return heroes.find(heroe => heroe.id === id);
}

export function ObtenerHeroesMayoresDe30(){
    const heroes = repository.obtenerTodos();
    return heroes.filter(heroe => heroe.edad > 30 && heroe.planetaOrigen === 'Tierra' && heroe.poder.length >= 2);
}