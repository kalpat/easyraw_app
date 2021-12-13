
//Klick auf Abbrechen
$( '#cancel_button' ).click(function() {
    $("#App_Content").load("./templates/loginform.html");
    //Loginform Sprache laden
    $.getScript("./js/login/change_language.js");
  //Registrierungsformular einfügen mit Klick "Account erstellen!"
  $.getScript("./js/registration/registrationform.js");
  });

  //Dropdown Accounttyp wird geändert
$("#accounttyp_selection").change(function(){
var sel_accounttype =  $(this).val();
 if ((sel_accounttype == "company") || (sel_accounttype == "privat")) {
   //Input-Field Name freigeben
   $("#acc_name").removeAttr("disabled");
 }else{
   //Input-Field Name sperren
   $("#acc_name").attr("disabled", "disabled");
   //Input-Field Adresse sperren
   $("#acc_address").attr("disabled", "disabled");
   //Input-Field PLZ sperren
   $("#acc_zip").attr("disabled", "disabled");
   //Input-Field Ort sperren
   $("#acc_city").attr("disabled", "disabled");
   //Input-Field Usermail sperren
   $("#usermail").attr("disabled", "disabled");
  //Input-Field Passwort
   $("#userpassword").attr("disabled", "disabled");
   //Input-Field Passwort Confirmation
   $("#userpassword_confirm").attr("disabled", "disabled");
 }
});

//Wenn Eingabe im Account-Name getätigt,
//dann wird das nächste Feld "Adresse" frei gemacht
$("#acc_name").keyup(function(){
var acc_name_str = $(this).val();

if(acc_name_str != null){
$("#acc_address").removeAttr("disabled");
}
});

//Wenn Eingabe im Account-Adresse getätigt,
//dann wird das nächste Feld "PLZ" frei gemacht
$("#acc_address").keyup(function(){
  var acc_address_str = $(this).val();

  if (acc_address_str != null) {
    $("#acc_zip").removeAttr("disabled");
  }
});

//Wenn Eingabe im Account-PLZ getätigt,
//dann wird das nächste Feld "Ort" frei gemacht
$("#acc_zip").keyup(function(){
  var acc_zip_str = $(this).val();

  if (acc_zip_str != null) {
    $("#acc_city").removeAttr("disabled");
  }
});

//Wenn Eingabe im Account-Ort getätigt,
//dann wird das nächste Feld "Usermail" frei gemacht
$("#acc_city").keyup(function(){
  var acc_city_str = $(this).val();

  if (acc_city_str != null) {
    $("#usermail").removeAttr("disabled");
  }
});

$("div").focusout(function(){
  var acc_name_str = $("#acc_name").val();

  if (acc_name_str == "") {
   //Input-Field Adresse sperren
$("#acc_address").attr("disabled", "disabled");
//Input-Field PLZ sperren
$("#acc_zip").attr("disabled", "disabled");
//Input-Field Ort sperren
$("#acc_city").attr("disabled", "disabled");
//Input-Field Usermail sperren
$("#usermail").attr("disabled", "disabled"); 
 //Input-Field Passwort
 $("#userpassword").attr("disabled", "disabled");
 //Input-Field Passwort Confirmation
 $("#userpassword_confirm").attr("disabled", "disabled");
  }
});

  //Eingabe in Usermail wird Serverseitig geprüft und man erhält eine entsprechende Message
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