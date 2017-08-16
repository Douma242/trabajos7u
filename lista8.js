var lista = [3, 4, 5];
var copia = lista;
function elOcho(l1){
	l2=l1;
	l2.push(8);
	return l2
}
elOcho(copia);
console.log(lista);
console.log(l2);