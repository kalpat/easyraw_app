$('#registerform_button').click(function() {
    $("#App_Content").load("templates/registrationform.html");
    $.getScript("./js/registration/registerform_actions.js");
  });


