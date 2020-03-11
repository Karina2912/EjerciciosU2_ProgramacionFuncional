//11. Realizar una función que permita calcular la unión, intersección y diferencia de dos conjuntos de datos.
var arregloUno = new Set(["Pablo","Emanuel","Marcos","Juan"])
var arregloDos = new Set(["Juan","Pablo","Hernesto","Jesus"])

function definirUnion(arregloUno,arregloDos) {
    var union = new Set([...arregloUno, ...arregloDos])
    return union;
}

function defInterseccion(arregloUno,arregloDos) {
    let interseccion = new Set([...arregloUno].filter(x => arregloDos.has(x)));
    return interseccion;
}

function definirDiferencia(arregloUno,arregloDos) {
    let difference = new Set([...arregloUno].filter(x => !arregloDos.has(x)));
    return difference;
}
console.log(definirDiferencia(arregloUno,arregloDos));
console.log(defInterseccion(arregloUno,arregloDos));
console.log(definirUnion(arregloUno,arregloDos));