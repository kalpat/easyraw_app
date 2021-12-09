
//Wenn in localStorage keine verschlüsselte Mail-Adresse vorhanden ist,
  //dann müssen alle Menü ausgeblendet werden und das Login-Formular geladen
  if (localStorage.getItem("usermail_encrypted")===null) { 
    //Login-Formular wird geladen und angezeigt
    $("#App_Content").load("./templates/loginform.html");
    //Sprache für das Loginformular
    $.getScript("./js/login/change_language.js"); 
    //Registrierungsformular einfügen it Klick "Account erstellen!"
    $.getScript("./js/registration/registrationform.js"); 
  }else{



  }