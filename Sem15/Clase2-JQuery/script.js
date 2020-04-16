// Selectores
// # -> Id
// . -> clases
// vacío -> etiquetas
// [] -> atributos
$('#caja'); // Seleccion de un elemento por id

//Eventos
$('#caja').mouseenter(function () { 
    alert('estás sobre la caja')
});
$('#caja').click(function () { 
    alert('estás sobre la caja')
});

//Efectos
// *********** Fade
$(document).ready(function(){
  $("#button").click(function(){
    $("#div1").fadeOut(); //Forma por defecto
    $("#div2").fadeOut("slow"); //tiempo predeterminado
    //$("#div3").fadeOut("fast"); //Forma por defecto
    $("#div3").fadeOut(3000, () => {
        alert('Se ejecutó el fadeout');
    }); //Asignar tiempo
  });
});

// -> Toggle -> hacer si no está hecho y deshacer si ya se hizo
$(document).ready(function(){
    $("#toggle").click(function(){
      $("#div4").fadeToggle(); //Forma por defecto
      $("#div5").fadeToggle("slow"); //tiempo predeterminado
      //$("#div3").fadeOut("fast"); //Forma por defecto
      $("#div6").fadeToggle(3000); //Asignar tiempo
    });
  });

// *********** Hide/Show
$('#caja2Toggle').click(function () {
    // $('#caja2').hide(); -> desaparece la caja
    $('#caja2').toggle();
});

// *********** slide
$(document).ready(function(){
    $("#flip").click(function(){
      //$("#panel").slideDown("slow");
      $("#panel").slideToggle("slow");
    });
  });

// *********** animacion
$('#btnCaja3').click(function () {
    // $('#caja2').hide(); -> desaparece la caja
    $('#caja3').animate({
        left: '500px',
        opacity: '0.2',
        height: 'toggle',
    });
});

// *********** callback
$('#btnCaja4').click(function () {
    $('#caja4').hide(1000);
    alert('desapareció');
});

// *********** Inyectar CSS / Concatenar efectos
$('#btnCaja5').click(function () {
    $('#txtCaja5').css('color', 'green').slideUp(3000).slideDown(3000);
});

// *********** Obtener Valor
$('#btnImg').click(function () {
    alert($('#rutaImg').attr('href'));
});

// *********** Asignar Valor
$('#btnImg2').click(function () {
    $('#rutaImg2').attr('href', 'https://meet.google.com/oax-ksjz-oqp?pli=1&authuser=2');
});

// *********** añadir clase
$('#btnAddClass').click(function () {
    $('#txtAzul').addClass('rojo');
});
$('#btnRemoveClass').click(function () {
    $('#txtAzul').removeClass('rojo');
});
$('#btnToggleClass').click(function () {
    $('#txtAzul').toggleClass('rojo');
});

// *********** dimensiones de elemento
$('#btnCaja6').click(function () {
    alert($('#caja6').width() + ' ' + $('#caja6').height());
});