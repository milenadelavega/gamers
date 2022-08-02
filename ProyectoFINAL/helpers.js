// Generar un numero random
let getRandomNumber = size => {
    return Math.floor(Math.random() * size);
  }
  
  // Obtener la distancia de 2 puntos
  let getDistance = (e, target) => {
    let diffX = e.offsetX - target.x;
    let diffY = e.offsetY - target.y;
    return Math.sqrt((diffX * diffX) + (diffY * diffY));
  }
  
  // retornar un String dependiendo la distancia.
  let getDistanceHint = distance => {
    if (distance < 30) {
      return "Hirviendo!!!";
    } else if (distance < 40) {
      return "Muy caliente!";
    } else if (distance < 60) {
      return "Caliente";
    } else if (distance < 100) {
      return "Cálido";
    } else if (distance < 180) {
      return "Frio!";
    } else if (distance < 360) {
      return "Muy frio!";
    } else {
      return "Congelado!!!";
    }
  }