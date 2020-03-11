//4.Determine el mayor de 4 enteros

var lista = [123,1,134,34], resultado = lista[0];
for (i = 0; i < lista.length; i++) 
{
    if(resultado < lista[i])
    {
        resultado = lista[i];
    }
}
console.log("El numero:"+resultado+" es el numero mayor");