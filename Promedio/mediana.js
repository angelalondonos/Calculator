const lista = [
    300,
    400,
    500,
   
    600,
    300,
    200,
]


function ordenar( a, b ){ 
    return a - b; 
}

function calcularMediana(lista){

    lista.sort(ordenar);
    console.log(lista);
    const mitadLista = parseInt(lista.length /2);
    let mediana;
    if (esPar(lista.length)){
        const elemento1 = lista[mitadLista - 1];
        const elemento2 = lista[mitadLista];
        const promedio = (elemento1 + elemento2) / 2;
        return mediana = promedio; 
    }else {
        return  mediana = lista[mitadLista];
    }
}

function esPar(numero){
    if (numero%2 === 0){
        return true;
    }else {
        return false;
    }
}
