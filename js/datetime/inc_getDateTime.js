function get_newDatetime(){

var currentdate = new Date();

//Monate beginnen in Javascript mit 0, daher +1 um korrekten Wert zu erhalten
var getMonth = currentdate.getMonth() + 1;

var newDateTime = currentdate.getFullYear() + "-" 
+ getMonth + "-"
+ currentdate.getDate() + " "
+ currentdate.getHours() + ":"
+ currentdate.getMinutes() + ":"
+ currentdate.getSeconds();

return newDateTime;
}