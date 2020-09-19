

function comprobar5(){
	
	var Respuesta1=document.getElementById("respuesta1").value;
	var Respuesta2=document.getElementById("respuesta2").value;
	var Respuesta3=document.getElementById("respuesta3").value;
	var Respuesta4=document.getElementById("respuesta4").value;
	var Respuesta5=document.getElementById("respuesta5").value;
	var Respuesta6=document.getElementById("respuesta6").value;
	var Respuesta7=document.getElementById("respuesta7").value;
	var Respuesta8=document.getElementById("respuesta8").value;

		


	if (Respuesta1==9248){
	 	document.getElementById("Correcto1").style='display:block';
	 	document.getElementById("Incorrecto1").style='display:none';
	} else{
		document.getElementById("Correcto1").style='display:none';
		document.getElementById("Incorrecto1").style='display:block';
	}


	if (Respuesta2==-32){
	 	document.getElementById("Correcto2").style='display:block';
	 	document.getElementById("Incorrecto2").style='display:none';
	} else{
		document.getElementById("Incorrecto2").style='display:block';
		document.getElementById("Correcto2").style='display:none';
	}

if (Respuesta3==-170){
	 	document.getElementById("Correcto3").style='display:block';
	 	document.getElementById("Incorrecto3").style='display:none';
	} else{
		document.getElementById("Incorrecto3").style='display:block';
		document.getElementById("Correcto3").style='display:none';
	}

if (Respuesta4==985){
	 	document.getElementById("Correcto4").style='display:block';
	 	document.getElementById("Incorrecto4").style='display:none';
	} else{
		document.getElementById("Correcto4").style='display:none';
		document.getElementById("Incorrecto4").style='display:block';
	}


if (Respuesta5==-750){
	 	document.getElementById("Correcto5").style='display:block';
	 	document.getElementById("Incorrecto5").style='display:none';
	} else{
		document.getElementById("Incorrecto5").style='display:block';
		document.getElementById("Correcto5").style='display:none';
	}

if (Respuesta6==186){
	 	document.getElementById("Correcto6").style='display:block';
	 	document.getElementById("Incorrecto6").style='display:none';
	} else{
		document.getElementById("Incorrecto6").style='display:block';
		document.getElementById("Correcto6").style='display:none';
	}

if (Respuesta7==118){
	 	document.getElementById("Correcto7").style='display:block';
	 	document.getElementById("Incorrecto7").style='display:none';
	} else{
		document.getElementById("Correcto7").style='display:none';
		document.getElementById("Incorrecto7").style='display:block';
	}


	if (Respuesta8==75){
	 	document.getElementById("Correcto8").style='display:block';
	 	document.getElementById("Incorrecto8").style='display:none';
	} else{
		document.getElementById("Incorrecto8").style='display:block';
		document.getElementById("Correcto8").style='display:none';
	}



	if ((Respuesta1==9248) && (Respuesta2==-32) && (Respuesta3==-170) && (Respuesta4==985) && (Respuesta5==-750) && (Respuesta6==186) && (Respuesta7==118) && (Respuesta8==75)){
		document.getElementById("Contenido").style='display:none';
		document.getElementById("Codigo").style='display:block';
	}


}
