//10. Realizar una función que reciba una lista y devuelva empleando recursividad otra lista de elementos pares.

var lista = [22,123,4,3,6,78,1,78,0];
var arreglo = [];
var i = 0;

function determinarPares(entrada) {
    if (entrada == 0) {
        return true;
    }
    else {
        return determinarImpares(entrada - 1);
    }
}

function determinarImpares(entrada) {
    if (entrada == 0) 
    {
        return false;
    }
    else{ 
        return determinarPares(entrada - 1);
    }
}

for(contador = 0;contador < lista.length;contador++) {
    if(determinarPares(lista[contador])==true) arreglo[contador] = lista[contador]
}

do {
    if(arreglo[i] == undefined) arreglo.splice(i,1)
    console.log(arreglo[i])
    i++
} while(i<arreglo.length)