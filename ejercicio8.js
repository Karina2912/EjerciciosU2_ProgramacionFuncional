//8.Dadas dos listas, determine si son iguales. Devolver verdadero o falso.

var listaUno = ['mango', 'nance', 'frijol', 'sandia', 'melon', 'piña'];
var listaDos = ['mango', 'nance', 'frijol', 'sandia', 'melon', 'piña'];
var valorDos = true, i = 0;
do {
if (listaUno[i] == listaDos[i]) 
{valor = true;}
else {valorDos = false;}
i++;
} while(i < listaUno.length || i < listaDos.length)
resultado = valor && valorDos;
if(resultado) {
    // true
    console.log('Las listas son iguales');
    console.log(resultado);
}else {
    // false
    console.log(resultado);
}