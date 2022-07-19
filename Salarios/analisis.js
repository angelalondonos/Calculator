//Helpers
function esPar (numerito){
    return numerito%2 == 0;
}

//Calculadora de mediana
function calcularMediana(lista){

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

//Calcular la mediana general
const salariosCol = colombia.map(
    function (personita){
        return personita.salary;
    }
);

const salariosColSorted = salariosCol.sort(
        function (salaryA, salaryB){
            return salaryA-salaryB; 
        }
);

const medianaGeneralCol = calcularMediana(salariosColSorted);

//Mediana del top 10% de salarios
const spliceStart = (salariosColSorted.length*90)/100;
const spliceCount = salariosColSorted.length - spliceStart;
const salariosTop10 = salariosColSorted.splice(spliceStart, spliceCount);

const medianaTop10= calcularMediana(salariosTop10);

console.log({
    medianaGeneralCol,
    medianaTop10,
});
