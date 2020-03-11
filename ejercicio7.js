//7.Determina si dada una lista, ésta se encuentra ordenada. Se debe devolver verdadero o falso

var arreglo =[20,21,22,23,24,25,26];
var valor = true, i = 0;
do {
    if(arreglo[i]<arreglo[i+1]) 
    {
        valorV=true;
    }else{ 
        valor=false;
    }
    i++;
} while(i<arreglo.length-1);

resultado = valorV && valor;
if(resultado) {
    console.log("La lista esta ordenada");
    console.log(resultado);
}else {
    console.log(resultado);
}
