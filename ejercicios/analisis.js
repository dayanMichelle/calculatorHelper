// helpers

function esPar(numerito){
    return ( numerito % 2 === 0);
}

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
  //calculadora de mediana salarial

    
function medianaSalarios(lista){
    const mitad = parseInt(lista.length / 2);

    if(esPar(lista.length)){
        const personitaMitad1 = lista[mitad - 1];
        const personitaMitad2 = lista[mitad];

        const mediana = calcularMediaAritmetica([personitaMitad1,personitaMitad2]);
        return mediana;
    }else{
        const personitaMitad = lista[mitad];
        return personitaMitad;
    }

};

// Mediana General 
const salariosCol = colombia.map(
    function (personita) {
      return personita.salary;
    }
  );
  
  const salariosColSorted = salariosCol.sort(
    function (salaryA, salaryB) {
      return salaryA - salaryB;
    }
  );


  


const  medianaGeneralCol= medianaSalarios(salariosColSorted);


// mediaan del to 10% de salarios más altos
const spliceStart = (salariosColSorted.length * 90) / 100;
const spliceCount = salariosColSorted.length - spliceStart;

const salariosColTop10 = salariosColSorted.splice(
    spliceStart,
     spliceCount,
);

medianaTop10Col= medianaSalarios(salariosColTop10);


console.log({
    medianaGeneralCol,
    medianaTop10Col
})