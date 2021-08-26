const circleCalculator = document.getElementById("circleCalculator");
const squareCalculator = document.getElementById("squareCalculator");
const triangleCalculator = document.getElementById("triangleCalculator");
const statistocsCalculator = document.getElementById("mediaAritmeticaCalculator");
const discountCalculator = document.getElementById("discountCalculator");
const whatdoyouwant  = document.getElementById("whatdoyouwant");
const analysis = document.getElementById("analysisCalculator");

function geometry(){
    displayBlock(whatdoyouwant);
    displayNone(discountCalculator);
    displayNone(statistocsCalculator);
    displayNone(analysis);
} 
 
function squear(){
    displayBlock(squareCalculator);
    displayNone(circleCalculator);
    displayNone(triangleCalculator);
}
function circle(){
    displayBlock(circleCalculator);
    displayNone(squareCalculator);
    displayNone(triangleCalculator);
}
function triangle(){
    displayBlock(triangleCalculator);
    displayNone(squareCalculator);
    displayNone(circleCalculator);
}
function analysisSalary(){
  displayNone(statistocsCalculator);
  displayNone(discountCalculator);
  displayNone(whatdoyouwant);
  displayBlock(analysis);
}
function statistics(){
  displayBlock(statistocsCalculator);
  displayNone(discountCalculator);
  displayNone(whatdoyouwant);
  displayNone(analysis);
}
function discount(){
  displayNone(statistocsCalculator);
  displayNone(analysis);
    displayNone(whatdoyouwant);
    displayBlock(discountCalculator);
}

/*Codigo cuadrado */
function perimetroCuadrado(lado){
    return lado * 4;
} 
function displayNone(id){
    id.style.display="none";
}
function displayBlock(id){
    id.style.display="block";
}

function areaCuadrado(lado){
    return lado * lado;
} 

function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const resultado = document.getElementById("perimetro");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    resultado.innerHTML = perimetro;
    calcularAreaCuadrado()
   
}
function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const resultado = document.getElementById("area");
    const area = areaCuadrado(value);
    resultado.innerHTML = area;
}

// codigo circulo
const PI = Math.PI;
// Diametro
function diametroCirculo(radio){
    return radio * 2;
}
// Perimetro
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
} 
//Area
function areaCirculo(radio){
    return (radio * radio) * PI;
} 

function calcularPerimetroCirculo(){
    const radio = document.getElementById("radio");
    const radio_ =  parseInt(radio.value);

    const perimetro = perimetroCirculo(radio_);
    const resultado = document.getElementById("perimetroCirculo");
        
    const Rarea = document.getElementById("areaCirculo");
    const area = areaCirculo(radio_);
    resultado.innerHTML = perimetro;
    Rarea.innerHTML = area;
}
//codigo triangulo

function perimetroTirangulo(lado1,lado2,base){
    return lado1+lado2+base;
} 

function areaTriangulo(base,altura){
    return (base * altura) / 2;
} 

function calcularPerimetroTriangulo(){
    const lado1 = document.getElementById("lado1");
    const lado1Tri = parseInt(lado1.value);

    const lado2 = document.getElementById("lado2");
    const lado2Tri = parseInt(lado2.value);

    const base = document.getElementById("base");
    const baseTri = parseInt(base.value);
   
    const perimetro = perimetroTirangulo(lado1Tri,lado2Tri,baseTri);
    const resultado = document.getElementById("perimetroTriangulo");
    
    resultado.innerHTML = perimetro;
}
function calcularAreaTriangulo(){
    const base  = document.getElementById("baseTriangulo");
    const baseTri = parseInt(base.value);

    const altura  = document.getElementById("alturaTriangulo");
    const alturaTri = parseInt(altura.value);

    const resultado = document.getElementById("areaTriangulo");
    const area = areaTriangulo(baseTri, alturaTri);

    resultado.innerHTML = area;
}

//discount


function calcularPrecioConDescuento(precio, descuento) {
  const porcentajePrecioConDescuento = 100 - descuento;
  const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

  return precioConDescuento;
}

function onClickButtonPriceDiscount() {
    //id del cupón
  const inputCoupon = document.getElementById("InputCoupon");
  const couponValue = inputCoupon.value;
    //id del precio original
  const inputPrice = document.getElementById("InputPrice");
  const priceValue = inputPrice.value;
    // objeto con nombre del cupón y su valor
  const coupons = [
    {
      name: "boleta",
      discount: 15,
    },
    {
      name: "pero_no_le_digas_a_nadie",
      discount: 30,
    },
    {
      name: "es_un_secreto",
      discount: 25,
    },
  ];

  let descuento;

  // ??
  const isCouponValueValid = function (coupon) {
    return coupon.name === couponValue;
  };

    //almacena el si la encontró o no
  const userCoupon = coupons.find(isCouponValueValid);

    //valida si no es valido el nombre del cupón
  if (!userCoupon) {
    alert("El cupón " + userCouponValue + "no es válido");
  } else {
    const descuento = userCoupon.discount;
    const precioConDescuento = calcularPrecioConDescuento(
      priceValue,
      descuento
    );

    const resultP = document.getElementById("ResultP");
    resultP.innerText = "$ " +precioConDescuento;
  }
}

//promedio
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
  
//mediana



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
//moda
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

//obetenr lista
const promedio = document.getElementById("promedio");
const moda = document.getElementById("moda");
const medianaR = document.getElementById("medianaR");
const cantidadElementos = document.getElementById("cantidadElementos");
const cantidadElementosValue = cantidadElementos.value;
const inputs = document.getElementById("inputs");
const lista = [];
 
function imprimirCantidadInputs(valor){

 for(var i = 0; i < valor ; i++){
   var input = document.createElement("INPUT");
   input.type='number';
   input.id="ok"+i;
   inputs.appendChild(input);
  
 }
}

function agregarLista(){
  for(var i = 0; i <= cantidadElementos.value - 1; i++){
    var inputLista = document.getElementById("ok" + i);
       var inputLista_ = parseInt(inputLista.value);
       lista.push(inputLista_);
      console.log(lista);
      limpiar(inputLista);
     
  }
  medianaR.innerHTML = ordenarLista(lista);
  moda.innerHTML = encontrarModa(lista);
  promedio.innerHTML = calcularMediaAritmetica(lista);
}
function limpiar(id){
  id.value = "";
}


// salarios

const inputsMuestra = document.getElementById("inputsMuestra");
const colombia =[]; 
function imprimirCantidadMuestra(valor){

  for(var i = 0; i < valor ; i++){
    var inputMuestra = document.createElement("INPUT");
    inputMuestra.type='number';
    inputMuestra.id="muestra"+i;
    inputsMuestra.appendChild(inputMuestra);
   
  }
 }


// Mediana General
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


const salariosColSorted = colombia.sort(
  function (salaryA, salaryB) {
    return salaryA - salaryB;
  }
);

// mediaan del to 10% de salarios más altos
const spliceStart = (salariosColSorted.length * 90) / 100;
const spliceCount = salariosColSorted.length - spliceStart;

const salariosColTop10 = salariosColSorted.slice(spliceStart,spliceCount);

medianaTop10Col= medianaSalarios(salariosColTop10);


 const medianaSalary = document.getElementById("medianaSalary");
 function agregarListaMuestra(){
  for(var i = 0; i <= cantidadMuestra.value - 1; i++){
    var inputLista = document.getElementById("muestra" + i);
       var inputLista_ = parseInt(inputLista.value);
       colombia.push(inputLista_);
      console.log(colombia);
      limpiar(inputLista);
     
  }
  medianaSalary.innerHTML=medianaSalarios(colombia);
}
 
