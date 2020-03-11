//5.Calcula la suma de una lista (arreglo) de elementos.
    let numeros = [1,3,9,4,9,3,2,6];
    let total = numeros.reduce((num, numi) => num + numi, 0);

console.log("El total es: "+total);