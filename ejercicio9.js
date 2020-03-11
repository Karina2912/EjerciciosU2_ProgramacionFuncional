//9.Realizar una función recursiva que retorne como salida el resultado de la suma 1 + 3 + 5 + 7 + 9 + N

function recursiva(i) {
    if(i == 1) 
    {
        return i;
    }
    else 
    {
        return (2 + recursiva(i - 1));
    }
}

for(i = 1;i <= 12;i++)
{
    console.log(recursiva(i));
}