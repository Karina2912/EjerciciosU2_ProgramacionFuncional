//3.Dado un número entero en segundos, determinar la cantidad de horas, minutos y segundos que contiene.

var i = 19346;
function horas(i) {
    return Math.floor(i/3600);
}
function minutos(i) {
    return Math.floor((i%3600)/60);
}
function segundos(i) {
    return (i%60);
}
console.log(i);
console.log(horas(i)+" Horas");
console.log(minutos(i) + " Minutos");
console.log(segundos(i) + " Segundos");

