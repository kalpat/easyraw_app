$( '#cancel_button' ).click(function() {
    $("#App_Content").load("./templates/loginform.html");
    //Loginform Sprache laden
    $.getScript("./js/login/change_language.js");
  //Registrierungsformular einfügen mit Klick "Account erstellen!"
  $.getScript("./js/registration/registrationform.js");
  });


  $('#usermail').keyup(function() {
    $.getJSON('./config/communication.json', function(apidata) {
      console.log(apidata);
      var lang = localStorage.getItem("lang");
        var ajaxurl = apidata.api_url + "registrationmailcheck";
        var usermail = $('#usermail').val();
        $.ajax({
          url: ajaxurl,
          data: {lang: lang, usermail: usermail }
        })
  .done(function(response){

    console.log(response);
  var responseResult = $.parseJSON(response);

    if (responseResult.result=="Ok") {
      $('#userpassword').removeAttr('disabled');
      $("#wrong_emailadress").remove();
    }else{
      $('#email_msg').html(responseResult.errormsg);
      $('#userpassword').attr('disabled', 'disabled');
    }
  }); 
    });
  });