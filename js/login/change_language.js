function change_language(lang){
  $.getJSON('lang/' + lang + '/loginform.json', function(loginform) {
    //Email-Msg-Feld unsichtbar machen
    $("#email_msg").hide();
    //Password-Msg-Feld unsichtbar machen
    $("#password_msg").hide();
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
    //Label Username
    $("#L_usermail").html(loginform.usermail)
    //Label Password
    $("#L_password").html(loginform.password)
    //Button - Login
    $("#login_button").html(loginform.login_button)
    //Button - Account erstellen
    $("#registerform_button").html(loginform.registerform_button)
  });
}

  //Funktion - Sprachausgabe - Login-Formular
  change_language(lang);

  $('#language_selection').change(function(){
    var get_value = $(this).val();
    localStorage.setItem("lang", get_value);
    var set_lang = localStorage.getItem("lang");
    change_language(set_lang)
  });

