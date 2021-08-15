//random fact
var factList = [
  "Up to half of the world's coral reefs have already been lost or severely damaged. In fact, scientists predict that all corals will be threatened by 2050 and that 75 percent will face high to critical threat levels. (The World Counts)",/*0*/
  "Coral reefs make up some of Earth's most diverse ecosystems. Over 25 percent of the ocean species live in coral reefs though they cover less than 0.1 percent of the ocean. Because of the rich coral reefs are sometimes called the rainforests of the sea. (The World Counts)",/*1*/
  "The annual global economic value of coral reefs is estimated between US$30–375 billion. (The World Counts)",/*2*/
  "By 2070, coral reefs could be gone altogether. <br> Children born today may be the last generation to see coral reefs...unless we do everything to limit warming to 1.5C, we will lose 99% of the world’s coral reefs” - David Obura, chair of the Coral Specialist Group in the International Union for the Conservation of Nature.(U.S. Environmental Protection Agency)"];/*3*/


var fact = document.getElementById("fact");
var myButton = document.getElementById("myButton");
var count = 0;

if(myButton){
myButton.addEventListener("click", displayFact);
}
function displayFact(){
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length){
    count = 0;
  }
}

//personalized message
var displayScript = document.getElementById("scriptReturned");
var scriptButton = document.getElementById("scriptButton");


if (scriptButton) {
  scriptButton.addEventListener("click", generateScript);
}

/*
REFACTOR ITEM 2: 
Create a separate function for displaying the script.
Be sure to update function names.
*/

function generateScript() {
  //This variable must be in the function or it will not work
  var name = document.getElementById("name").value;
  var location = document.getElementById("location").value;
  var concern = document.getElementById("concern").value;

  displayScript.innerHTML = "Hi there, my name is " + name + " and I live in " + location + ". I am writing to you shine light on the destruction of coral reefs. Coral reefs are like underwater cities that are teeming with life. But sadly, up to half of coral reefs are already lost or severely damaged. And the decline continues with alarming speed. It’s happening at twice the pace of rainforest decline. Please help support coral reefs by sharing this message with others and address the leading causes for coral reef destructon. I am concerned with" + concern + ". Thank you, " + name;
}
