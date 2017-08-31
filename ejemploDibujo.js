function semaforo(){
	var root= document.getElementById("root");
	var cuadro1= document.createElement("div");
	var colorRojo= document.createElement("div");
	var colorAmarillo= document.createElement("div");
	var colorVerde= document.createElement("div");


	cuadro1.className="cuadro";
	colorRojo.className="rojo";
	colorAmarillo.className="amarillo";
	colorVerde.className="verde";
	cuadro1.id="cuadro";
	colorRojo.id="rojo";
	colorAmarillo.id="amarillo";
	colorVerde.id="verde";

	cuadro1.appendChild(colorRojo);
	cuadro1.appendChild(colorAmarillo);
	cuadro1.appendChild(colorVerde);
	root.appendChild(cuadro1);
	return root;
}
semaforo()


function botoncito(){
	var botonazo= document.getElementById("boton");
	var i=0;
	botonazo.onClick(i=i+1);
	
	return i;
 }
