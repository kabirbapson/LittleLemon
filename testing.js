const fruits = ["cheese", "pie", "lunch", "breakfast"];
const string = "i am really hungry for some";

function addNum(min, max) {
  var range = max - min + 1;

  var rand = Math.random();

  
  return min + Math.floor(range * rand);
}

console.log(fruits[addNum(0, 3)]);
