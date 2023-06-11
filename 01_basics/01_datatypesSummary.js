// Primitive 

// 7 types : String , Number , Boolean , null , undefined , Symbol

const score = 25;
const scoreValue = 58.9
const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 45487878n

// Reference (Non Primitive)

// Type : Array , Object , Function


const heroes = ["Mercedes" , "BMW" , "Audi"];
let Obj = {
    "name" : "Faheem",
    "age" : 20

}

const myFunction = function(){
    console.log("Hey Hello World");
}

//*************************** MEMORIES */

// Stack(Primitive) get's copy , Heap(Non-Primitive)get's reference

let mName = "MohammedFaheem"

let anotherName = mName;
anotherName = "chalil"

console.log(anotherName);
console.log(mName);

let userOne = {
    "email":"adadsd@gmail.com",
    "password": 12354
}

let userTwo = userOne

console.log(userOne.email);
console.log(userTwo.email);