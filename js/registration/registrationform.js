$('#registerform_button').click(function() {
  //Registrierungsformular laden
    $("#App_Content").load("./templates/registrationform.html");
    //Sprache für Registrierformular laden und einfügen
    $.getScript("./js/registration/registrationform_lang.js");
    //Formular-Actionen laden
    $.getScript("./js/registration/registrationform_actions.js");

  });


