const marvel_heroes = ["thor" , "spiderman" , "batman"]
const dc_heroes = ["superman" , "flash" , "ironman"]
// marvel_heroes.push(dc_heroes) // push() here , 2nd array is considered to be 3rd element
// console.log(marvel_heroes);
// console.log(marvel_heroes[3][0]); // accessing superman 

const hero = marvel_heroes.concat(dc_heroes) // returns new error
// console.log(hero);

// EASIER METHOD THAN CONCAT IS SPREAD OPERATOR

const new_Heroes = [...marvel_heroes,...dc_heroes]
// console.log(new_Heroes);

const anotherArray = [1 , 2 , 3 ,[4 , 5] , 6 ,[7,8 ,[9 ,10]]] // Complex array becomes normal array by using "FLAT"
const realArray = anotherArray.flat(Infinity)
// console.log(realArray);

// Situation where data comes in different form
console.log(Array.isArray("MohammedFaheem")); 
console.log(Array.from("MohammedFaheem"));  // converts into hero
console.log(Array.from({name:"MohammedFaheem" })); // can't convert into array because key is not mentioned

// converting into an array
let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));


