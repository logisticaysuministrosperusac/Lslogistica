
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


      console.log('lo Hice');
    window.open('https://wa.me/+51978575288/?text='+nombre+'%20'+mensaje,'_blank');window.open(this.href,'_self');


    
	} else {
	    mensaje = "Has clickado Cancelar";
	}
	document.getElementById("ejemplo").innerHTML = mensaje;


}

/*$(document).ready(() => {
            $('#importarContenido').click(function() {
              console.log('quinua');
                $('#listas').load("includes.html");

            });
        });*/


$(document).ready(function(){

  $("#importarContenido").click(function(){
    console.log('quinua');
    /*$(".div").show();*/
    $('#div').load('contenido.html');
    console.log('quinua_');
  });
});



$(document).ready(function(){



  $("#importar").click(function(){
 
    /*$(".div").show();*/
    $('.Contenido').load('./products/MallaRachel.html');
  
  });

});




$(document).ready(function(){


  /* --------------*MENU 2*/


  $("#importar_0").click(function(){
    console.log('tela Arpillera____');
    /*$(".div").show();*/
    window.scrollTo(0, 900);
    $('.productoInfo').load('./products/arpillera.html');
    console.log('tela Arpillera____');
  });




  $("#importar").click(function(){
    console.log('Malla Raschel____');
    /*$(".div").show();*/
    window.scrollTo(0, 900);
    $('.productoInfo').load('./menu_2/MallaRachel.html');
    console.log('Malla Raschel');
    
  });


  $("#importar_1").click(function(){
    console.log('SacosTejidos');
    /*$(".div").show();*/ 
    $('.productoInfo').load('./menu_3/Sacos.html');
    console.log('SacosTejidos');
  });



  $("#importar_2").click(function(){
    console.log('TelaAvicola');
    /*$(".div").show();*/
    $('.productoInfo').load('./menu_2/TelaAvicola.html');  
    console.log('TelaAvicola');
  });



  $("#importar_3").click(function(){
    console.log('TelaTarflex');
    /*$(".div").show();*/
    $('.Contenido').load('./menu_2/TelaTarflex.html');
    console.log('TelaTarflex');
  });
  /* ------FIN--------*MENU 2*/

  /* --------------*MENU 3*/




  $("#llamar").click(function(){
    console.log('sacos');
    /*$(".div").show();*/
    $('.productoInfo').load('./product_group/sacos.html');
    console.log('sacos');
  });


  $("#llamar_1").click(function(){
    console.log('Telas');
    /*$(".div").show();*/
    $('.productoInfo').load('./product_group/telas.html');
    console.log('Telas');
  });


  $("#llamar_2").click(function(){
    console.log('MALLAS');
    /*$(".div").show();*/
    $('.productoInfo').load('./product_group/mallas.html');
    console.log('mallas');
  });


  $("#llamar_3").click(function(){
    console.log('Impermeables');
    /*$(".div").show();*/
    $('.productoInfo').load('./product_group/impermeables.html');
    console.log('impermeables');
  });



  /* ------FIN--------*MENU 3*/

});

