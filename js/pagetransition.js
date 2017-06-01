// JavaScript Document

$( "#menu-desktop a" ).click(function() {
 
  // récupérer l'élément cliqué
   var cible = $(this).attr('href');
  
    // 1. masquer le niveau actif
    $( ".niveauactif" ).hide( 2000, function() {
  
  // retirer la classe de l'élèment caché
  $(this).removeClass( "niveauactif" );
  
  // afficher le niveau correspondant à cet attribu
    // 2. afficher le nouveau niveau
	
  $(cible).fadeIn( 3000);
  $(cible).addClass( "niveauactif" );
  });

  
  return false;
});


$( "#menu-mobile a" ).click(function() {
 
  // récupérer l'élément cliqué
   var cible = $(this).attr('href');
  
    // 1. masquer le niveau actif
    $( ".niveauactif" ).hide( 2000, function() {
  
  // retirer la classe de l'élèment caché
  $(this).removeClass( "niveauactif" );
  
  // afficher le niveau correspondant à cet attribu
    // 2. afficher le nouveau niveau
	
  $(cible).fadeIn( 3000);
  $(cible).addClass( "niveauactif" );
  });

  
  return false;
});