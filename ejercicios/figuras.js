//Código del cuadrado
console.group("Cuadrado");

function perimetroCuadrado(lado){
    return lado * 4;
} 


function areaCuadrado(lado){
    return lado * lado;
} 

console.groupEnd();

//****************************************/

//Código del triángulo



function perimetroTirangulo(lado1,lado2,base){
    return lado1+lado2+base;
} 

function areaTriangulo(base,altura){
    return (base * altura) / 2;
} 
console.groupEnd();
//****************************************/

//Código del círculo

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




console.groupEnd();

// Aquí interactuo con el HTML

function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const resultado = document.getElementById("perimetro");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    resultado.innerHTML = perimetro;
   
}
function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const resultado = document.getElementById("area");
    const area = areaCuadrado(value);
    resultado.innerHTML = area;
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
function calcularPerimetroCirculo(){
    const radio = document.getElementById("radio");
    const radio_ =  parseInt(radio.value);

    const resultado = document.getElementById("perimetroCirculo");
    const perimetro = perimetroCirculo(radio_);

    const Rarea = document.getElementById("areaCirculo");
    const area = areaCirculo(radio_);
    resultado.innerHTML = perimetro;
    Rarea.innerHTML = area;
}