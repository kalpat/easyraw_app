function registerform_lang(lang){

    $.getJSON('lang/' + lang + '/registrationform.json', function(registerform) {
  //Label - Registrierungsformular - card header
      $("#registerform_header").html(registerform.registerFormLabel)
      //Label Input-Field Usermail
      $("#L_usermail").html(registerform.usermail)
      //Label input-Field - Password
      $("#L_password").html(registerform.password)
      //Label Input-Field - Password Confirmation
      $("#L_password_confirm").html(registerform.password_confirm)
      //Label - Button - Account erstellen
      $("#create_button").html(registerform.create_account)
      //Label - Button - Cancel
      $("#cancel_button").html(registerform.cancel_creation)
    });
  }

  var lang = localStorage.getItem("lang");
  registerform_lang(lang);

  