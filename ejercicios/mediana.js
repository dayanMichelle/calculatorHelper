function calcularMediaAritmetica(lista) {
  // el metodo reduce se asemeja a un for
  //recibe una funcion con dos valores(valor que varia y el valor
  //del nuevo elemento)
  const sumaLista = lista.reduce(function (valorAcumulado = 0, nuevoElemeto) {
    return valorAcumulado + nuevoElemeto;
  });
  const promedioLista = sumaLista / lista.length;
  return promedioLista;
}



function esPar(numerito) {
  if (numerito % 2 == 0) {
    return true;
  } else {
    return false;
  }
}
//ordenar lista
function ordenarLista(lista){
    lista.sort(function(a, b) {
        
        return a - b;
      });
      
}

let mediana;
function ordenarLista(lista) {

    obtenerLista(lista);    
  if (esPar(lista.length)) {
    const mitadLista = parseInt(lista.length / 2);
    const elemento1 = lista[mitadLista - 1];
    const elemento2 = lista[mitadLista];
    
    const promedioElemento1y2 = calcularMediaAritmetica([elemento1, elemento2]);
    mediana = promedioElemento1y2;
    return mediana
  } else {
    const mitadLista = parseInt(lista.length / 2);
    mediana = lista[mitadLista];
    return mediana
  }
}
