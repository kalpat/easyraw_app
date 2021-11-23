//Wenn per localStorage keine Sprache gesetzt wurde, dann 
  //wird standardmäßig auf Englisch gesetzt
  if (localStorage.getItem("lang")===null) {
    localStorage.setItem("lang", "en");
 }

  //Sprache aus localStorage landen
  var lang = localStorage.getItem("lang");

import  'login/boot_easyraw.js';
