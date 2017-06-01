// JavaScript Document

/*
 * Debug
 */

var debug = document.createElement('div');
debug.className = "debug";
debug.innerHTML = "debugging";
document.querySelector("body").appendChild(debug);

/*
 * SVG Animate
 */

// Le code suivant charge le fichier SVG externe, 
// afin de le rendre accessible par Javascript

var svgExt = document.getElementById("carteeurope");

// On définit tous les objets SVG qu'on souhaite ensuite manipuler
var svgDoc, svgEspagne, svgUk, svgAllemagne, svgLuxembourg;

// test MediaQuery
var mq = window.matchMedia('(min-width: 700px)');

svgExt.addEventListener("load",function() {

  svgDoc = svgExt.contentDocument;
  console.log("SVG contentDocument Loaded!");

  // Le SVG est chargé, on peut maintenant
  // définir les formes qu'on souhaite manipuler
  svgEspagne = svgDoc.getElementById("espagne");
  svgUk = svgDoc.getElementById("uk");
  svgAllemagne = svgDoc.getElementById("allemagne");

  // On va rendre "sensible" un élément du SVG
  svgEspagne.addEventListener("mouseenter", svgCountryInfo);
  svgEspagne.addEventListener("click", svgCountryInfo);
  svgEspagne.addEventListener("mouseleave", svgCountryHide);
  
  svgUk.addEventListener("mouseover", svgCountryInfo, false);
  // svgUk.addEventListener("click", svgCountryInfo);
  svgUk.addEventListener("mouseout", svgCountryHide, false);
   
  svgAllemagne.addEventListener("mouseenter", svgCountryInfo);
  // svgAllemagne.addEventListener("click", svgCountryInfo);
  svgAllemagne.addEventListener("mouseleave", svgCountryHide);

 }, false);

function svgCountryInfo(){

  // ce qui se passe au hover:
  // on obtient l'ID de l'élément survolé:

  if(mq.matches) {

  var CountryID = this.id;
  // console.log("svgCountryInfo: "+CountryID);
  debug.innerHTML = "svgCountryInfo: "+CountryID;

  // on en déduit l'élément à rendre visible
  var CountryInfoClass = "." + CountryID + "hover";
  var CountryInfo = document.querySelector( CountryInfoClass );

  CountryInfo.style.display="block";

  }

}

function svgCountryHide(){

  // ce qui se passe au hover:
  // on obtient l'ID de l'élément survolé:
  
  if(mq.matches) {

  var CountryID = this.id;
  // console.log("svgCountryHide: "+CountryID);
  debug.innerHTML = "svgCountryHide: "+CountryID;

  // on en déduit l'élément à rendre visible
  var CountryInfoClass = "." + CountryID + "hover";
  var CountryInfo = document.querySelector( CountryInfoClass );

  CountryInfo.style.display="none";

  }

}

