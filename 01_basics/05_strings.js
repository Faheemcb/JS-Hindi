//Modern way of writing Strings ////

const myName = "Mohammed Faheem"
const age = 20
// console.log(`Hi my name is ${myName} and I'm ${age} of age ,  feel free to have touch with me 😊`);

//Another way to decalre string

const gameName = new String('MohammedFaheem')

console.log(gameName[0]);
console.log(`My name's length is ${gameName.length}`);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(4)); // check the char
// console.log(gameName.indexOf('M'));

const newString = gameName.substring(0,4) // starts from zero ends with -1 position and doesn't accepts negative values
// console.log(newString);

const anotherString = gameName.slice(-2 , 4) // Accepts negative values
// console.log(anotherString);

const stringName = "    Faheem  "
console.log(stringName);
console.log(stringName.trim()); // remove starting and ending space

const url = "http://MohammedFaheem.com/mohammed%20faheem";
console.log(url.replace('%20','-')); // removes the char and replace with other

console.log(url.includes('mohammed'));

console.log(gameName.split('*'));