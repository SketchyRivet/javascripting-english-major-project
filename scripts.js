/*let userInput;
userInput = prompt("What do you want to have for dinner?", "Type your answer here.");
if (userInput === "burrito") {
  $("#response").html("Brilliant choice!");
} else {
  $("#response").html("Don't you want a burrito?");
}
*/
/*let tipCalculator;
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
tipCalculator();*/
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
/*let arrayOfStrings, arrayOfNumbers, arrayMixed;
arrayOfStrings = ["a", "b", "c"];
arrayOfNumbers = [1, 2, 3];
arrayMixed = ["a", 1, null, true, arrayOfNumbers, [4.5, 5.6]];
$("#response").html(arrayMixed[4]);
*/
let myHabaneroSauceSquirts, myBurritoObject;
// First, define and assign a variable for how
// spicy the burrito is.
myHabaneroSauceSquirts = 3;
// Now assign the burrito object.
myBurritoObject = {
tortilla: "wheat",
guacamole: true,
beans: "pinto",
// Make use of the variable above.
habaneroSauceSquirts: myHabaneroSauceSquirts,
// Use the variable again in a function.
spiciness: function(){
if (myHabaneroSauceSquirts > 0 ){
alert("This is a spicy burrito!");
} else {
alert("This is a mild burrito.");
}
}
};
$("#response").html("Your " + myBurritoObject.tortilla + " burrito has " +
myBurritoObject.habaneroSauceSquirts +
" squirts of habanero.");
myBurritoObject.spiciness();
