// Check the get-input.js code as well as the README for the lowdown on the beefing up we've done!
const getInput = require("./get-input.js");


let firstName=getInput(1);
let lastName=getInput(2);
let make=getInput(3);
let model=getInput(4);
let year=getInput(5);


console.log("Hi " + firstName + " " + lastName);
console.log("Hi " + firstName.toUpperCase() + " " + lastName.toUpperCase() + " I cap you.");
console.log("Hi " + firstName[0] + ". " + lastName[0] + ". " + "I init you.");
console.log(firstName[0].toLowerCase() + lastName.toLowerCase() + ".prsvr@gmail.com");

