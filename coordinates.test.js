//calcular la distancia de un punto al origen
function distanceToOrigin(point) {
  const [x, y] = point;
  return Math.sqrt(x * x + y * y);
}

//obtener las coordenadas más cercanas al origen
function coordinates(list) {
  return list
    .slice() // Clonar la lista para no modificar la original
    .sort((a, b) => distanceToOrigin(a) - distanceToOrigin(b)) // Ordenar por distancia al origen
    .slice(0, 3); // Tomar las tres primeras coordenadas
}

// Lista de coordenadas
const list = [
  [2, 4],     
  [1, -1],
  [-10, 5],   
  [-10, -2],  
  [3, 3],
  [10, 0],    
];

// Obtener las 3 coordenadas más cercanas al origen
const closestCoordinates = coordinates(list);

// Imprimir las coordenadas obtenidas
console.log("Las 3 coordenadas más cercanas al origen son:");
closestCoordinates.forEach(coord => console.log(coord));
