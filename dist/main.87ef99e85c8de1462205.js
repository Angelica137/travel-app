(()=>{var e=[];function n(){var n=document.getElementById("location").value,t=e.find((function(e){return e.name===n}));if(t){var o=t.lat,a=t.lng,c="/api/weather?lat=".concat(o,"&lng=").concat(a);fetch(c).then((function(e){return e.json()})).then((function(e){console.log("Weather data",e)})).catch((function(e){return console.error("Error fetching weather data:",e)}))}else console.error("Selected location not found in geonames data")}window.searchCities=function(){var n=document.getElementById("location").value;if(!(n.length<3)){var t="/api/searchCities?q=".concat(n);fetch(t).then((function(e){return e.json()})).then((function(n){var t,o;console.log(n),e=n.geonames,t=n.geonames,(o=document.getElementById("suggestions")).innerHTML="",t.forEach((function(e){var n=document.createElement("option");n.value=e.name,o.appendChild(n)}))})).catch((function(e){return console.error("Error fetching data: ",e)}))}},document.addEventListener("DOMContentLoaded",(function(){document.getElementById("location").addEventListener("input",searchCities),document.getElementById("submitForm").addEventListener("click",n)}))})();