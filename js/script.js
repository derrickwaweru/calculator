//backend or the business logic
//this is for the addition
var add=function(number1,number2)
{
return number1+number2;
};
//this is for the subtraction
var subtract=function(number1,number2)
{
return number1-number2;
};
//this is for the division
var division=function(number1,number2)
{
return number1/number2;
};
//this is for the MULTIPLICATION
var multiplication=function(number1,number2)
{
return number1*number2;
};
//user inerface logic
$(document).ready(function(){
  //for addition
  $("form#add").submit(function(event){
    event.preventDefault();
  var number1=parseInt($("#add1").val());
  var number2=parseInt($("#add2").val());
  var result=add(number1,number2);
  $("#output").text(result);
});
//for subtraction
$("form#subtract").submit(function(event){
  event.preventDefault();
var number1=parseInt($("#subtract1").val());
var number2=parseInt($("#subtract2").val());
var result=subtract(number1,number2);
$("#output").text(result);
});
//for division
$("form#division").submit(function(event){
  event.preventDefault();
var number1=parseInt($("#divident").val());
var number2=parseInt($("#divisor").val());
var result=division(number1,number2);
$("#output").text(result);
});
//for multiplication
$("form#multiplication").submit(function(event){
  event.preventDefault();
var number1=parseInt($("#multiply1").val());
var number2=parseInt($("#multiply2").val());
var result=multiplication(number1,number2);
$("#output").text(result);
});
});
