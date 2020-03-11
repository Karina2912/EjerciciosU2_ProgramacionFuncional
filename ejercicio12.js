//12. Realizar una función que permita definir un mapa de datos y permita encontrar un valor a partir de su clave.

function mapaDeDatos(){
    mapaDatos = new Map()
    mapaDatos.set(1,"Juan Manuel")
    mapaDatos.set(2,"Jesus Alberto")
    mapaDatos.set(3,"Emiliana Sanchez")
    mapaDatos.set(4,"Armando Hoyos")
    mapaDatos.set(5,"Emanuel Alvarado")
    mapaDatos.set(6,"Lucy Escobar")
    mapaDatos.set(7,"Victor Quintana")
    return mapaDatos;
}
estado = mapaDeDatos()
clave = 5;
console.log("CLAVE INGRESADO: "+clave);
console.log("RESULTADO: "+estado.get(clave));

