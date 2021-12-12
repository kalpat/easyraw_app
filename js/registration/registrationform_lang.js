function registerform_lang(lang){

    $.getJSON('lang/' + lang + '/registrationform.json', function(registerform) {
  //Label - Registrierungsformular - card header
      $("#registrationform_cardheader").html(registerform.registerFormLabel)
      //Laber Dropdown - Accounttyp
      $("#L_accounttyp").html(registerform.L_accounttype)
      //Dropdown Platzhalter - "Accounttyp wählen!"
      $("#accounttyp_select").html(registerform.acctype_select)
      //Dropdown Option - Firma
      $("#sel_company").html(registerform.acctype_company)
      //Dropdown option - Privat
      $("#sel_privat").html(registerform.acctype_privat)
      //Label Input-Field Name - wird für beide Account-Typen allgemein gehalten
      $("#L_acc_name").html(registerform.L_Name)
      //Label Input-Field Strasse
      $("#L_acc_address").html(registerform.L_acc_address)
      //Label Input-Field PLZ
      $("#L_acc_zip").html(registerform.L_acc_zip)
      //Label Input-Field Ort
      $("#L_acc_city").html(registerform.L_acc_city)
      //Label Input-Field Usermail
      $("#L_usermail").html(registerform.usermail)
      //Label Input-Field - Password
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

  