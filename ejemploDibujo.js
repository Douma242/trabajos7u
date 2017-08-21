function render(){
	var h1Titulo=document.createElement("h1");
	var titulo= document.createTextNode("Ejemplo dibujo:");
	h1Titulo.appendChild(titulo);
	
	var root = document.getElementById("root");
	root.appendChild(h1Titulo);
}
render();