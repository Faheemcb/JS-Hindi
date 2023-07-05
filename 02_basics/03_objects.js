// OBJECTS CAN BE DECLARED BY TWO METHODS:
// "LITERAL" & "CONSTRUCTOR"
// "SINGLETON IS BY USING CONSTRUCTOR" 
// "LITERAL IS NOT SINGLETON"
// Object.create  " SINGLETON"

// SYMBOL

const mySym = Symbol("asdf")

// "OBJECT LITERALS"
// OBJECTS ACCEPTS KEY AND VALUE 
const JsUser = {
    name : "Faheem",
    email: "faheem@google.com",
    [mySym] :"gjgjh", //Symbol "'REFER IN [] BRACKETS OTHERWISE IT TAKES AS STRING"
    age : 20,
    "full Name" : "Mohammed Faheem",
    isLoggedIn : false,
    lastLogginDays: ["Monday" , "Thursday"]
}
// console.log(JsUser.age); // doesnt takes as string while accesssing using DOT
// console.log(JsUser["age"]); // takes as string so give qoutes
// console.log(JsUser["full Name"]); // no option to access using dot
// console.log(typeof JsUser.mySym); // doesnt denotes as SYMBOL unless give square bracket
// console.log(JsUser[mySym]);

// Changing value 
JsUser.email="MohammedFaheem@gmail.com"
// Object.freeze(JsUser) // LOCKING OBJECT
JsUser.email="MohammedFaheem@youtube.com" // Didnt change ecause it's freeze
// console.log(JsUser);
//
//  """""""""""""" FUNCTIONS IN OBJECT  """"""""""""""

JsUser.greeting = function(){
    console.log("Hi JS user");
}

JsUser.greetingTwo = function(){
    console.log(`Hi JS user ${this.name} we are glad to Welcome you to our course`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

