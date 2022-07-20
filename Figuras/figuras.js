//código para calcular el perímetro y área de un cuadrado

//const ladoCua__drado = 5; 
const perimetroCuadrado = lado => lado * 4
const areaCuadrado = lado => lado * lado

//código para calcular el perímetro y área de un triangulo

const perimetroTriangulo = (lado1, lado2, base) => lado1 + lado2 + base
const areaTriangulo = (base, altura) => (base * altura) / 2

function calcularAltura(lado1, lado2, base){
    var altura;
    
    if(lado1 === lado2 && lado2 != base){
        const mitadBase = base/2;
        altura = Math.sqrt( (lado1*lado1) - (mitadBase*mitadBase));
    }else{
        alert("El triangulo no es isósceles")
    }
    return altura;
}

//código para calcular el diámetro y perímetro de un círculo

const perimetroCirculo = radio => 2 * 3.1416 * radio
const areaCirculo = radio => 3.1416 * radio * radio

//Aquí interactuamos con el HTML para el cuadrado 
function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    ResultadoCuadrado.innerText = "El perímetro del cuadrado es: " + perimetro;

} 

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    ResultadoCuadrado.innerText = "El área del cuadrado es: " + area;
} 


//Aquí interactuamos con el HTML para el triangulo 
function calcularPerimetroTriangulo(){
    const input = document.getElementById("InputTrianguloLado1");
    const input2 = document.getElementById("InputTrianguloLado2");
    const input3 = document.getElementById("InputTrianguloBase");
    const value = input.value;
    const value2 = input.value2;
    const value3 = input.value3;

    const perimetro = perimetroTriangulo(value, value2, value3);
    alert(perimetro);
} 

function calcularAreaTriangulo(){
    const input = document.getElementById("InputTrianguloLado1");
    const input2 = document.getElementById("InputTrianguloLado2");
    const input3 = document.getElementById("InputTrianguloBase");
    const value = input.value;
    const value2 = input.value2;
    const value3 = input.value3;

    const altura = calcularAltura(value, value2, value3);
    const area = areaTriangulo(value3, altura);
    alert(area);   
} 

function calcularAlturaTriangulo(){
    const input = document.getElementById("InputTrianguloLado1");
    const input2 = document.getElementById("InputTrianguloLado2");
    const input3 = document.getElementById("InputTrianguloBase");
    const value = input.value;
    const value2 = input.value2;
    const value3 = input.value3;

    const altura = calcularAltura(value, value2, value3);
    alert(altura);    
} 

//Aquí interactuamos con el HTML para el círculo 
function calcularPerimetroCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const perimetro = perimetroCirculo(value);
    ResultadoCirculo.innerText = "El perímetro del circulo es: " + perimetro;
} 

function calcularAreaCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const area = areaCirculo(value);
    ResultadoCirculo.innerText = "El área del circulo es: " + area;
} 

