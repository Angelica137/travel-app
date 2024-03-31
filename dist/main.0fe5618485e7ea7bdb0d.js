(()=>{"use strict";var t={420:(t,n,e)=>{var o=e(596),a=e.n(o),i=e(520),r=e.n(i),d=e(176),s=e.n(d),c=e(120),l=e.n(c),f=e(808),p=e.n(f),m=e(936),h=e.n(m),u=e(144),g={};g.styleTagTransform=h(),g.setAttributes=l(),g.insert=s().bind(null,"head"),g.domAPI=r(),g.insertStyleElement=p(),a()(u.c,g),u.c&&u.c.locals&&u.c.locals,e.p,t=e.hmd(t);var x=[];function y(t){var n=document.getElementById("suggestions");n.innerHTML="",t.forEach((function(t){var e=document.createElement("option");e.value=t.name,n.appendChild(e)}))}function v(){var t=document.getElementById("location").value.trim().toLowerCase(),n=document.getElementById("travelDate").value;console.log("date from client:",n);var e=x.find((function(n){return n.name.toLowerCase()===t}));if(console.log("Selected Place: ",e),e){var o=e.lat,a=e.lng,i="/api/weather?lat=".concat(o,"&lng=").concat(a,"&date=").concat(n);fetch(i).then((function(t){return t.json()})).then((function(t){console.log("Forecast data for travel date",t),w(t),$(n)})).catch((function(t){return console.error("Error fetching weather data:",t)}));var r="/api/destination?destination=".concat(encodeURIComponent(t));fetch(r).then((function(t){return t.json()})).then((function(t){return b(t)})).catch((function(t){return console.error("error fetching destination image: ",t)}))}else console.error("Selected location not found in geonames data")}function w(t){var n=document.getElementById("weather-title"),e=document.getElementById("weather");if(n.innerHTML="",e.innerHTML="",t&&void 0!==t.temp&&t.weather&&t.weather.description&&t.weather.icon){var o=document.createElement("p");o.textContent="The weather will be:",n.appendChild(o);var a=document.createElement("p");a.textContent="".concat(t.temp,"°C"),e.appendChild(a);var i=t.weather.icon,r="https://www.weatherbit.io/static/img/icons/".concat(i,".png"),d=document.createElement("img");d.src=r,d.alt="Weather Icon",d.className="weather-icon",e.appendChild(d);var s=document.createElement("p");s.textContent="".concat(t.weather.description),e.appendChild(s)}else e.innerHTML="Weather data is not available"}function b(t){var n=document.getElementById("destination");if(n.innerHTML="",t&&t.hits&&t.hits.length>0){var e=document.createElement("img");e.src=t.hits[0].webformatURL,n.appendChild(e)}else n.innerHTML="Displaying image failed"}function $(t){var n=new Date,e=new Date(t)-n,o=Math.ceil(e/864e5),a=document.getElementById("countdown");a.innerHTML="".concat(o," days to go!"),o<0?a.innerHTML="This date is in the past":0===o&&(a.innerHTML="Your trip is today!")}window.searchCities=function(){var t=document.getElementById("location").value;if(!(t.length<3)){var n="/api/searchCities?q=".concat(t);fetch(n).then((function(t){return t.json()})).then((function(t){console.log(t),x=t.geonames,y(t.geonames)})).catch((function(t){return console.error("Error fetching data: ",t)}))}},document.addEventListener("DOMContentLoaded",(function(){document.getElementById("location").addEventListener("input",searchCities),document.getElementById("submitForm").addEventListener("click",v)})),t.exports={searchCities,displayWeather:w,displayDestination:b,displayCountDown:$,showSuggestions:y,handleSubmit:v,geonamesData:x}},144:(t,n,e)=>{e.d(n,{c:()=>l});var o=e(500),a=e.n(o),i=e(312),r=e.n(i),d=e(212),s=e(592),c=r()(a());c.i(d.c),c.i(s.c),c.push([t.id,'html,body{margin:0;font-family:"Nunito Sans",Helvetica,Arial,sans-serif;color:#000}input{display:flex;height:40px;padding:0px 24px;width:237px;gap:16px;border-radius:40px;border:solid 2px #000;margin:24px 0px;font-size:16px;font-family:"Nunito Sans",Helvetica,Arial,sans-serif;font-weight:400;line-height:normal}.button-main{font-family:"Nunito Sans",Helvetica,Arial,sans-serif;font-weight:800;font-size:22px;padding:8px 8px 8px 8px;margin:8px;width:52px;height:52px;background-color:#f4c749;border:solid 2px #000;border-radius:100px;transition:transform .3s ease,box-shadow .3s ease;cursor:pointer}.button-main:hover{background-color:#efaf00}.card-media{width:595px;height:651px;border-radius:24px;background:#fff;margin-top:120px;overflow:hidden}.card-media img{width:100%;height:100%;object-fit:cover;object-position:center;border-radius:24px}img{max-width:100%;height:auto;display:block}@media(min-width: 768px)and (max-width: 1023px){.card-media{width:320px}}@media(max-width: 767px){.card-media{width:340px;height:auto;margin:24px}.card-media img{max-height:300px;object-position:center}}',""]);const l=c},212:(t,n,e)=>{e.d(n,{c:()=>d});var o=e(500),a=e.n(o),i=e(312),r=e.n(i)()(a());r.push([t.id,'.grid-container-main {\n\tdisplay: grid;\n\tgrid-template-columns: repeat(12, 1fr);\n\tgrid-template-rows: auto 1fr auto;\n\tgrid-gap: 24px;\n\tpadding: 16px;\n\tmin-height: 100vh;\n\tgrid-template-areas:\n\t"hd hd hd hd dd sd sd sd sd sd sd sd"\n\t"main main main main main sd sd sd sd sd sd sd"\n\t"ft ft ft ft ft sd sd sd sd sd sd sd";\n}\n\n/* Mobile styles */\n@media(max-width: 767px) {\n\t.grid-container-main {\n\t\tgrid-template-columns: repeat(4, 1fr);\n\t\tgrid-template-areas:\n\t\t"hd"\n\t\t"main"\n\t\t"sd"\n\t\t"ft";\n\t}\n}\n\n/* Tablet styles */\n@media(min-width: 944px) and (max-width: 1023px) {\n\t.grid-container-main {\n\t\tgrid-template-columns: repeat(4, 1fr);\n\t\tgrid-template-areas:\n\t\t"hd hd sd sd"\n\t\t"main sd sd"\n\t\t"ft ft sd sd";\n\t}\n}\n\n/* Desktop styles */\n@media(min-width: 1024px) {\n}\n\n.header {\n\tgrid-area: hd;\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n\tmargin: 0;\n\tbackground-color: $background-light;\n}\n\n.form-content {\n\tgrid-area: main;\n}\n\n.side-content {\n  grid-area: sd;\n  background-color: #E7A5C1; /* I cannot pick it from variables */\n\tdisplay: flex;\n  justify-content: center; /* Horizontally center */\n}\n\nfooter {\n\tgrid-area: ft;\n\tbottom: 0;\n\tdisplay: flex;\n\tpadding: 16px;\n\ttext-align: center;\n\tmargin-top: auto;\n\tbackground: ;\n\tfont-size: 20px;\n}',""]);const d=r},592:(t,n,e)=>{e.d(n,{c:()=>d});var o=e(500),a=e.n(o),i=e(312),r=e.n(i)()(a());r.push([t.id,"/* Base styles */\n#logo {\n\tcolor: $text-primary;\n\tfont-family: Modak;\n\tfont-size: 40px;\n\tfont-weight: 400;\n\tline-height: normal;\n}\n\nh1 {\n\tfont-size: $font-h1;\n\tmargin: 0;\n\tfont-family: $font-stack;\n\tfont-weight: 400;\n\tline-height: normal;\n}\n\nh2 {\n\tfont-size: $font-h2;\n\tfont-family: $font-stack;\n\tfont-weight: $font-weight-main;\n}\n\nbody {\n\tfont-family: $font-stack;\n\tfont-size: $font-body1;\n\tfont-weight: $font-weight-main;\n}\n\n.data-display {\n\tcolor: $text-primary;\n\ttext-align: left;\n\tfont-family: $font-stack;\n\tfont-size: $font-h2;\n\tfont-weight: $font-weight-heavy;\n\tmargin: 48px 16px;\n}\n\n.data-display-light {\n\tcolor: $text-primary;\n\ttext-align: left;\n\tfont-family: $font-stack;\n\tfont-size: $font-h2;\n\tfont-weight: $font-weight-main;\n\tmargin: 48px 16px;\n}\n\n/* Mobile styles */\n@media(max-width: 767px) {\n\t#logo {\n\t\tcolor: $text-primary;\n\t\tfont-family: Modak;\n\t\tfont-size: 36px;\n\t\tfont-weight: $font-weight-main;\n\t\tpadding: 16px;\n\t}\n\t\n\th1 {\n\t\tfont-size: $font-h1-mobile;\n\t\tfont-family: $font-stack;\n\t\tfont-weight: $font-weight-main;\n\t}\n\t\n\th2 {\n\t\tfont-size: $font-h2-mobile;\n\t\tfont-family: $font-stack;\n\t\tfont-size: normal;\n\t\tfont-weight: $font-weight-main;\n\t}\n\t\n\tbody {\n\t\tfont-family: $font-stack;\n\t\tfont-size: $font-body1;\n\t\tfont-weight: $font-weight-main;\n\t}\n\t\n\t.data-display {\n\t\tcolor: $text-primary;\n\t\ttext-align: left;\n\t\tfont-family: $font-stack;\n\t\tfont-size: $font-h2-mobile;\n\t\tfont-weight: $font-weight-heavy;\n\t\tmargin: 48px 16px;\n\t}\n\t\n\t.data-display-light {\n\t\tcolor: $text-primary;\n\t\ttext-align: left;\n\t\tfont-family: $font-stack;\n\t\tfont-size: $font-h2-mobile;\n\t\tfont-weight: $font-weight-main;\n\t\tmargin: 48px 16px;\n\t}\n}",""]);const d=r},312:t=>{t.exports=function(t){var n=[];return n.toString=function(){return this.map((function(n){var e="",o=void 0!==n[5];return n[4]&&(e+="@supports (".concat(n[4],") {")),n[2]&&(e+="@media ".concat(n[2]," {")),o&&(e+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),e+=t(n),o&&(e+="}"),n[2]&&(e+="}"),n[4]&&(e+="}"),e})).join("")},n.i=function(t,e,o,a,i){"string"==typeof t&&(t=[[null,t,void 0]]);var r={};if(o)for(var d=0;d<this.length;d++){var s=this[d][0];null!=s&&(r[s]=!0)}for(var c=0;c<t.length;c++){var l=[].concat(t[c]);o&&r[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),e&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=e):l[2]=e),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),n.push(l))}},n}},500:t=>{t.exports=function(t){return t[1]}},596:t=>{var n=[];function e(t){for(var e=-1,o=0;o<n.length;o++)if(n[o].identifier===t){e=o;break}return e}function o(t,o){for(var i={},r=[],d=0;d<t.length;d++){var s=t[d],c=o.base?s[0]+o.base:s[0],l=i[c]||0,f="".concat(c," ").concat(l);i[c]=l+1;var p=e(f),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)n[p].references++,n[p].updater(m);else{var h=a(m,o);o.byIndex=d,n.splice(d,0,{identifier:f,updater:h,references:1})}r.push(f)}return r}function a(t,n){var e=n.domAPI(n);return e.update(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap&&n.supports===t.supports&&n.layer===t.layer)return;e.update(t=n)}else e.remove()}}t.exports=function(t,a){var i=o(t=t||[],a=a||{});return function(t){t=t||[];for(var r=0;r<i.length;r++){var d=e(i[r]);n[d].references--}for(var s=o(t,a),c=0;c<i.length;c++){var l=e(i[c]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}i=s}}},176:t=>{var n={};t.exports=function(t,e){var o=function(t){if(void 0===n[t]){var e=document.querySelector(t);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(t){e=null}n[t]=e}return n[t]}(t);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(e)}},808:t=>{t.exports=function(t){var n=document.createElement("style");return t.setAttributes(n,t.attributes),t.insert(n,t.options),n}},120:(t,n,e)=>{t.exports=function(t){var n=e.nc;n&&t.setAttribute("nonce",n)}},520:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=t.insertStyleElement(t);return{update:function(e){!function(t,n,e){var o="";e.supports&&(o+="@supports (".concat(e.supports,") {")),e.media&&(o+="@media ".concat(e.media," {"));var a=void 0!==e.layer;a&&(o+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),o+=e.css,a&&(o+="}"),e.media&&(o+="}"),e.supports&&(o+="}");var i=e.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(o,t,n.options)}(n,t,e)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)}}}},936:t=>{t.exports=function(t,n){if(n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}}},n={};function e(o){var a=n[o];if(void 0!==a)return a.exports;var i=n[o]={id:o,loaded:!1,exports:{}};return t[o](i,i.exports,e),i.loaded=!0,i.exports}e.n=t=>{var n=t&&t.__esModule?()=>t.default:()=>t;return e.d(n,{a:n}),n},e.d=(t,n)=>{for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},e.hmd=t=>((t=Object.create(t)).children||(t.children=[]),Object.defineProperty(t,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+t.id)}}),t),e.o=(t,n)=>Object.prototype.hasOwnProperty.call(t,n),e.p="/",e.nc=void 0,e(420)})();