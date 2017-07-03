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
var o = [];
var arreglo  = [1,2,3,4,5,6];
for (var i in arreglo) {
  if ( (arreglo[i] % 2) == 0 )
    {
  console.log( "Elementos en posicion par: " +o.push(i) );
}
}
//ejercicio3
var arre= [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var x = arre.reverse();
console.log(x);
