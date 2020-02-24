/*let userInput;
userInput = prompt("What do you want to have for dinner?", "Type your answer here.");
if (userInput === "burrito") {
  $("#response").html("Brilliant choice!");
} else {
  $("#response").html("Don't you want a burrito?");
}
*/
let tipCalculator;
tipCalculator = function(multiVariable, divVariable){
let multiTotal;
let divTotal;
if (tipAmount < 1){
multiTotal = total * tipAmount;
$("#response").html("Your tip is $" + multiTotal);} else {
divTotal = total % tipAmount;
$("#response").html("Your tip is $" + divTotal);
}
};
let tipAmount;
tipAmount = prompt("What percentage do you want the tip to be?", "Type your answer here.");
let total;
total = prompt("What is the bill's total?", "Type your answer here.");
tipCalculator();
/*let makeABurrito;
makeABurrito = function(beansVariable){
  let beansResponse;
  beansResponse = "You ordered " + beansVariable + " beans. Good choice!";
  $("#response").html(beansResponse);
}
let blackBeans;
blackBeans = "black";
makeABurrito(blackBeans);
*/
