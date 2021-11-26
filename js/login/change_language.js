function change_language(lang){
  $.getJSON('lang/' + lang + '/loginform.json', function(loginform) {
    //Header Card Sprachauswahl
    $("#login_form_cardheader").html(loginform.lang_header)
    //Erste Option - Sprache Dropdown - "Sprache auswählen!"
    $("#lang_select").html(loginform.lang_select)
    //Dropdown Option - Englisch
    $("#lang_en").html(loginform.opt_englisch)
    //Dropdown Option - Deutsch
    $("#lang_de").html(loginform.opt_deutsch)
    //Header Login-Formular
    $("#loginform_header").html(loginform.loginFormLabel)


  });
}





  //Funktion - Sprachausgabe - Login-Formular
  change_language(lang);