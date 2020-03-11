// 1.Determina el resultado de un número x elevado a una potencia n
var numero = 12, potencia = 2;

const elevar = function(x,n){
    var res = 1;
    for(let contador = 0;contador<n;contador++){
        res *= x;
    }
    resultado="La potencia es: "+res+"";
    return resultado;
}

console.log(elevar(numero,potencia));