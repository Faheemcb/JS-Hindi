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
    [mySym] :"gjgjh", //Symbol
    age : 20,
    "full Name" : "Mohammed Faheem",
    isLoggedIn : false,
    lastLogginDays: ["Monday" , "Thursday"]
}
console.log(JsUser.age); // doesnt takes as string while accesssing using DOT
console.log(JsUser["age"]); // takes as string so give qoutes
console.log(JsUser["full Name"]); // no option to access using dot
// console.log(typeof JsUser.mySym); // doesnt denotes as SYMBOL unless give square bracket
console.log(JsUser[mySym]);

// Changing value 
