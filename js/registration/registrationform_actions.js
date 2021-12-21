
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
  }else{

    var acc_address_str = $("#acc_address").val();
    if (acc_address_str == "") {
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
    }else {

      var acc_zip_str = $("#acc_zip").val();

      if (acc_zip_str == "") {
        //Input-Field Ort sperren
$("#acc_city").attr("disabled", "disabled");
//Input-Field Usermail sperren
$("#usermail").attr("disabled", "disabled"); 
 //Input-Field Passwort
 $("#userpassword").attr("disabled", "disabled");
 //Input-Field Passwort Confirmation
 $("#userpassword_confirm").attr("disabled", "disabled");
      } else {
        var acc_city_str = $("#acc_city").val();
        if (acc_city_str == "") {
          //Input-Field Usermail sperren
$("#usermail").attr("disabled", "disabled"); 
//Input-Field Passwort
$("#userpassword").attr("disabled", "disabled");
//Input-Field Passwort Confirmation
$("#userpassword_confirm").attr("disabled", "disabled");
        } 
      }
    }
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
          method: 'post',
          data: {lang: lang, usermail: usermail }
        })
  .done(function(response_JSON){
    console.log(response_JSON);
    //var response_Array = $.parseJSON(response_JSON);
/*
    if (response_Array.result=="Ok") {
      $('#userpassword').removeAttr('disabled');
      $("#email_msg").hide();
    }else{
      $('#email_msg').html(response_Array.errormsg);
      $('#email_msg').show();
      $('#userpassword').attr('disabled', 'disabled');
    }
    */
  }); 
    });
  });

  //Eingabe Password - erstes Feld 
  $('#userpassword').keyup(function(){
    $.getJSON('./config/communication.json', function(apidata) {
      var apiurl = apidata.api_url + "passwordsecuretylevel";
      var userpassword = $('#userpassword').val();
    
  $.ajax({
    url: apiurl,
    data: {password: userpassword}
  })
  .done(function(response_JSON){
   console.log(response_JSON);
 var passwordlevel = $.parseJSON(response_JSON);

  var passwordlevel_percent = parseInt(passwordlevel.passw_securelevel)*100/50;
  if (passwordlevel_percent<30) {
    $('#password_msg').html('<div class="progress">\n' +
    '<div class="progress-bar progress-bar-striped progress-bar-animated bg-danger" style="width:'+passwordlevel_percent+'%"></div></div>');
    $('#password_msg').show();
    $('#userpassword_confirm').attr('disabled', 'disabled');
  }else{
    if (passwordlevel_percent<60) {
      $('#password_msg').html('<div class="progress">\n' +
      '<div class="progress-bar progress-bar-striped progress-bar-animated bg-warning" style="width:'+passwordlevel_percent+'%"></div></div>');
      $('#password_msg').show();
      $('#userpassword_confirm').attr('disabled', 'disabled');
    }else{
      if (passwordlevel_percent>60) {
        $('#password_msg').html('<div class="progress">\n' +
        '<div class="progress-bar progress-bar-striped progress-bar-animated bg-success" style="width:'+passwordlevel_percent+'%"></div></div>');
        $('#password_msg').show();
        $('#userpassword_confirm').removeAttr('disabled');
    }
  }
  }
   
  });
    });
  });

  //Eingabe - Password-Confirmation
  $('#userpassword_confirm').keyup(function(){
    var lang = localStorage.getItem("lang");
    $.getJSON('lang/'+lang+'/registrationform.json', function(msgdata){
      var msg_notconfirm = msgdata.password_notconfirmed;
      var msg_confirm = msgdata.password_confirmed;
  var userpassword = $('#userpassword').val();
  var passwordconfirm = $('#userpassword_confirm').val();

  console.log("Eingabe Passwordconf.: " + passwordconfirm);
  
  if (userpassword == passwordconfirm) {
    $('#create_button').prop('disabled', false);
    $('#passwordconfirm_msg').html('<div id="wrong_emailadress" class="alert alert-success">'+msg_confirm+'</div>');
    $('#passwordconfirm_msg').show();
  }else{
    $('#create_button').prop('disabled', true);
    $('#passwordconfirm_msg').html('<div id="wrong_emailadress" class="alert alert-danger">'+msg_notconfirm+'</div>');
    $('#passwordconfirm_msg').show();
  }
  });
  });

//
  $('#rmm_registrationform').submit(function(eventHandl){
    eventHandl.preventDefault();
  $.getJSON('./config/communication.json', function(apidata) {
    
    $.getScript('./js/datetime/inc_getDateTime.js')
    .done(function(){
      var apiurl = apidata.api_url + "createnewaccount";
      var currentDatetime = get_newDatetime();

      var registrationinformation = {};
  registrationinformation.api_key = apidata.api_key;
  registrationinformation.api_secret = apidata.api_secret;
  registrationinformation.lang = lang;
  registrationinformation.datetime = currentDatetime;
  registrationinformation.type = $('#accounttyp_selection').val();
  registrationinformation.name = $('#acc_name').val();
  registrationinformation.address = $('#acc_address').val();
  registrationinformation.zip = $('#acc_zip').val();
  registrationinformation.city = $('#acc_city').val();
  registrationinformation.usermail = $('#usermail').val();
  registrationinformation.password = $('#userpassword').val();
  registrationinformation.passordconfirm = $('#userpassword_confirm').val();

  $.ajax({
    url: apiurl,
    method:'post',
    data: {newaccount: registrationinformation},
  })
  .done(function(response_JSON){
    console.log(response_JSON);
//$('#App_Content').html(response_JSON);
 });
    
    });
    });
    });
  