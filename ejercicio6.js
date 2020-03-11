//6.Determina si un elemento dado está contenido en una arreglo. Devuelve verdadero o falso.
var num = 'mango', arreglo = ['sandia','melon', 'mango', 'papa', 'frijol']; 
function verificar(num){
    for (i = 0; i < arreglo.length; i++) {
        if(arreglo[i] == num){
            return true;
        }
    }
}
if(verificar(num)){
    console.log("Se encontro el elemento");
    console.log(true);
}else{
    console.log(false);
}