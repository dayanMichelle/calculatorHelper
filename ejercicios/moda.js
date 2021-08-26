const lista1Count = {};

//map recore el array
function encontrarModa(lista) {
  lista.map(function (elemento) {
    if (lista1Count[elemento]) {
      lista1Count[elemento] += 1; //si ya existía, suma 1
    } else {
      lista1Count[elemento] = 1; //si es la primera vez
      // que aparece, añade 1
    }
  });
  lista1Array = Object.entries(lista1Count).sort(function (
    elementoA,
    elementoB
  ) {
    return elementoA[1] - elementoB[1];
  });
  const moda = lista1Array[lista1Array.length - 1];
  return moda;
}

//Object.entries el mandamos el objeto que queremos
//convertir en un array
//Una lista de arrays con arrays, el valor y la cantidad de veces
//que se repite, cada numero es un objeto


