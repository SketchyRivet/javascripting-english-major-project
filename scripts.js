let userInput;
userInput = prompt("What do you want to have for dinner?", "Type your answer here.");
if (userInput === "burrito") {
  $("#responce").html("Brilliant choice!");
} else {
  $("#responce").html("Don't you want a burrito?");
}
