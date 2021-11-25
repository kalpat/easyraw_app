
if (localStorage.getItem("lang")===null) {
  localStorage.setItem("lang", "en");
}
//Sprache aus localStorage landen
var lang = localStorage.getItem("lang");
$("html").attr("lang", lang);
//Wenn per localStorage keine Sprache gesetzt wurde, dann 
  //wird standardmäßig auf Englisch gesetzt
  $(document).ready(function(){
  //Login-Form Methoden - Einfügen und AJAX
$.getScript("./js/login/login_form.js");

  });




