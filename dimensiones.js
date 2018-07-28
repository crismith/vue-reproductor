
// Mantiene el tamaño deseado al cargar y redimensionar la página
$('#listado').css('height',$(window).height()-52);
$('#rpd').css({'width':$(window).width()-365,'float':'left','border':'none', 'height':$(window).height()-100});
$('#buscador').css({'width':$(window).width()-365,'float':'left'});
$(window).resize(function(){
  $('#listado').css('height',$(window).height()-52);
  $('#rpd').css({'width':$(window).width()-365,'float':'left','border':'none', 'height':$(window).height()-100});
  $('#buscador').css({'width':$(window).width()-365,'float':'left'});
})