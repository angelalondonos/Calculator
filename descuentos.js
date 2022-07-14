//Código para calcular el valor final de un producto con descuento

function valorFinalConDescuento(precio, descuento){
    return ((precio * (100 - descuento))/100);
}

//Aquí interactuamos con el HTML 
function calcularDescuento(){
    const inputPrecio = document.getElementById("InputPrecio");
    const inputDescuento = document.getElementById("InputDescuento");
    const inputResultado = document.getElementById("Resultado");
    const valuePrecio = inputPrecio.value;
    const valueDescuento = inputDescuento.value;

    const valorFinal = valorFinalConDescuento(valuePrecio, valueDescuento);
    inputResultado.innerText = "El precio total con descuento es: " + valorFinal;

}