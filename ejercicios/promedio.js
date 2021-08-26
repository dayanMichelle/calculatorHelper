

function calcularMediaAritmetica(lista) {
// el metodo reduce se asemeja a un for
//recibe una funcion con dos valores(valor que varia y el valor
//del nuevo elemento)
  const sumaLista = lista.reduce(
      function (valorAcumulado = 0, nuevoElemeto){
        return valorAcumulado + nuevoElemeto;
      }
  );
  const promedioLista = sumaLista / lista.length;
  return promedioLista;
}

