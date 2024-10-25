export function renderizarHeroe(res, heroe){
    res.send(JSON.stringify({heroe}, null, 2));
}