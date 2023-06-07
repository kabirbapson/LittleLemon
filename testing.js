const fruits = ["cheese", "pie", "lunch", "breakfast"];
const string = "i am really hungry for some";
console.log(string);
var really = string.search("really");
console.log(really);

word = string.substr(really, 6);
newString = string.replace(word, word.toUpperCase());
console.log(newString);
