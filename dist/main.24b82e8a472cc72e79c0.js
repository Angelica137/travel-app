window.searchCities=function(){var e=document.getElementById("location").value;if(!(e.length<3)){var n="/api/searchCities?q=".concat(e);fetch(n).then((function(e){return e.json()})).then((function(e){var n,t;console.log(e),n=e.geonames,(t=document.getElementById("suggestions")).innerHTML="",n.forEach((function(e){var n=document.createElement("option");n.value=e.name,t.appendChild(n)}))})).catch((function(e){return console.error("Error fetching data: ",e)}))}},document.addEventListener("DOMContentLoaded",(function(){document.getElementById("location").addEventListener("input",searchCities)}));