
    var nombre = null;
    var mensaje = null;
    var status = null;

    var newButton = null;
function sub(){
  product = document.getElementsByName("Nombre")[0].value;
  shelf = document.getElementsByName("Mensaje")[0].value;

  newButton.innerHTML = "HTML Masters";

  alert(product+" "+shelf + status + newButton);

 
};

function alerta()
    {
    var mensaje;
    var opcion = confirm("¿Esta seguro de contactanos?");

  nombre = document.getElementsByName("Nombre")[0].value;
  mensaje = document.getElementsByName("Mensaje")[0].value;



    if (opcion == true) {
 


    window.open('https://wa.me/+51978575288/?text='+nombre+'%20'+mensaje,'_blank');window.open(this.href,'_self');


    
	} else {
	    mensaje = "Has clickado Cancelar";
	}
	document.getElementById("ejemplo").innerHTML = mensaje;

}

