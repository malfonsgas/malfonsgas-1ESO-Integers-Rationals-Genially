
/*window.onload= function Fescala() {
    var aleatorio = Math.random();
    document.getElementById('Escala').innerHTML = "Escala 1:"+ 1000*Math.round(4*aleatorio+1);
   EscalaPlano=1000*Math.round(4*aleatorio+1);
    }

*/

function PLANTILLAcomprobar(){
	var Respuesta1=document.getElementById("respuesta1").value;
	var Respuesta2=document.getElementById("respuesta2").value;
	var check1=document.getElementById("afirm1");
	var check2=document.getElementById("afirm2");
	var check3=document.getElementById("afirm3");
	var check4=document.getElementById("afirm4");
	var check5=document.getElementById("afirm5");

	/*Elegir la expresión lógica correcta*/
	var Respuesta3=(check1.checked && !check2.checked && !check3.checked && check4.checked && check5.checked);

	if (Respuesta1=="t=d/80"){
	 	document.getElementById("Correcto1").style='display:block';
	 	document.getElementById("Incorrecto1").style='display:none';
	} else{
		document.getElementById("Correcto1").style='display:none';
		document.getElementById("Incorrecto1").style='display:block';
	}


	if (Respuesta2==90){
	 	document.getElementById("Correcto2").style='display:block';
	 	document.getElementById("Incorrecto2").style='display:none';
	} else{
		document.getElementById("Incorrecto2").style='display:block';
		document.getElementById("Correcto2").style='display:none';
	}


	if (Respuesta3){
	 	document.getElementById("Correcto3").style='display:block';
	 	document.getElementById("Incorrecto3").style='display:none';
	} else{
		document.getElementById("Correcto3").style='display:none';
		document.getElementById("Incorrecto3").style='display:block';
	}



	/*if ((Respuesta2==90) && (Respuesta1=="t=d/80")&& (Respuesta3)){
		document.getElementById("Contenido").style='display:none';
		document.getElementById("Codigo").style='display:block';


	}*/


}
