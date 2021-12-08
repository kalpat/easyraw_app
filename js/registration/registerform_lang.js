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

  $( '#cancel_button' ).click(function() {
    $("#App_Content").load("templates/loginform.html");
    //Loginform Sprache laden
    $.getScript("./js/login/change_language.js");
  //Registrierungsformular einfügen mit Klick "Account erstellen!"
  $.getScript("./js/registration/registration_form.js");
  });

  $('#usermail').keyup(function() {
    $.getJSON('./config/communication.json', function(apidata) {
      console.log(apidata);
      var lang = localStorage.getItem("lang");
        var geturl = apidata.api_url + "chk_registrationmail";
        var get_usermail = $('#usermail').val();
  
        $.ajax({
          url: geturl,
          data: {lang: lang, usermail: get_usermail }
        })
  .done(function(response){

    console.log(response);

    if (response=="Ok") {
      $('#userpassword').removeAttr('disabled');
      $("#wrong_emailadress").remove();
    }else{
      $('#email_msg').html(response);
      $('#userpassword').attr('disabled', 'disabled');
    }
  }); 
    });
  });