$('#registerform_button').click(function() {
  console.debug("TEst");
    $("#App_Content").load("templates/registrationform.html");

    $.getScript("./js/registration/registerform_lang.js");
    
  });


