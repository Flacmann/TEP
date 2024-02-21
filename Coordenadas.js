function coordenadasPrimerTercerCuadrante(coordenadas) {
    let primerTercerCuadrante = [];
    for (let i = 0; i < coordenadas.length; i++) {
        let [x, y] = coordenadas[i];
        if (x > 0 && y > 0) { // Primer cuadrante
            primerTercerCuadrante.push(coordenadas[i]);
        } else if (x < 0 && y < 0) { // Tercer cuadrante
            primerTercerCuadrante.push(coordenadas[i]);
        }
    }
    return primerTercerCuadrante;
}

// Ejemplo de uso
let coordenadas = [[1, 2], [-3, 4], [-5, -6], [7, -8]];
let resultado = coordenadasPrimerTercerCuadrante(coordenadas);
console.log(resultado); // Salida esperada: [[1, 2], [-5, -6]]
