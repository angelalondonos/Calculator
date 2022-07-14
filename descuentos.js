//Código para calcular el valor final de un producto con descuento
const cupones =[
    "Alma10",
    "Cane20",
    "Luz30",
    "Caro40",
]


function valorFinalConDescuento(precio, descuento){
    return ((precio * (100 - descuento))/100);
}

function valorFinalConCupon(precio, cupon){
    let valorFinal;

    switch (cupon){
        case cupones[0]:
            valorFinal = ((precio * (100 - 10))/100);
        break;
        case cupones[1]:
            valorFinal=  ((precio * (100 - 20))/100);
        break;
        case cupones[2]:
            valorFinal =  ((precio * (100 - 30))/100);
        break;
        case cupones[4]:
            valorFinal =  ((precio * (100 - 40))/100);
        break;           
    }

    return valorFinal;

}

//Aquí interactuamos con el HTML para el descuento con porcentaje
function calcularDescuento(){
    const inputPrecio = document.getElementById("InputPrecio");
    const inputDescuento = document.getElementById("InputDescuento");
    const inputResultado = document.getElementById("Resultado");
    const valuePrecio = inputPrecio.value;
    const valueDescuento = inputDescuento.value;

    const valorFinal = valorFinalConDescuento(valuePrecio, valueDescuento);
    inputResultado.innerText = "El precio total con descuento es: " + valorFinal;

}

//Aquí interactuamos con el HTML para el descuento con cupón
function calcularDescuentoConCupon(){

    const inputPrecio = document.getElementById("InputPrecio");
    const inputResultado = document.getElementById("ResultadoCupon");
    const inputCoupon = document.getElementById("InputCoupon");
    const couponValue = inputCoupon.value;
    const valuePrecio = inputPrecio.value;

    const valorFinal = valorFinalConCupon(valuePrecio, couponValue);
    inputResultado.innerText = "El precio total con el cupón " + couponValue + " es: " + valorFinal;

}