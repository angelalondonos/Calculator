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

const perimetroCirculo = radio => 2 * Math.PI * radio
const areaCirculo = radio => Math.PI * radio * radio

//Aquí interactuamos con el HTML para el cuadrado 
function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
} 

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);    
} 


//Aquí interactuamos con el HTML para el triangulo 