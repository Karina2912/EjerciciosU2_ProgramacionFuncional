// 2.Determina si un número n se encuentra en un rango determinado
var numero = 123, ran1 = 1, ran2 = 50;
for (i = ran1; i <= ran2; i++) {
    if(numero==i){
        console.log(numero+" esta en el rango");
        break;
    }
    if(numero!=i && i==ran2){ 
        console.log(numero+" no esta en el rango")
}
}