//ejercicio1
var n1 = prompt("Su primer número: ");
var n2 = prompt("Su segundo número: ");
var n3 = prompt("Su tercer número: ");
if ((n1 > n2)  && (n1  > n3) ) {
 console.log("maximo: " + n1 + "\n" + "minimo: " + n3);
}
else if ((n2 > n1)  && (n2  > n3)   )
    {
  console.log("maximo: " + n2 + "\n" + "minimo: " + n1);
} else {  console.log("maximo: " + n3 + "\n" + "minimo: " + n1);
}
//ejercicio2
ar esPar = []; 
var esImpar = []; 
var array  = [1,2,3,4,5,6];
esPar = array.filter(function(n){return n%2 == 0;});
esImpar = array.filter(function(n){return n%2 == 1;});
document.write("Elementos pares " + esPar + '<br>' + "Elementos inpares " + esImpar + '<br>');

//ejercicio3
var arre= [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var x = arre.reverse();
console.log(x);
