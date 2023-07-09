// THIS used for using current context


const user = {
    username : "Mohammed Faheem",
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.username} , welcome to website`);
        // console.log(this);
    }

}
// user.welcomeMessage() // Mohammed Faheem
// user.username = "Mohammed Anas"
// user.welcomeMessage() // Mohammed Anas because this is the current constext of the variable

// console.log(this); returns an empty object

// function chai(){
//     let username = " Mohammed Faheem"
//     console.log(this.username); // undefined because it works in object works
// }
// chai()

// const chai = function () {
//     let username = " Mohammed Faheem"
//         console.log(this.username);
// }

// ARROW FUNCTIONS
const chai =  () => {
    let username = " Mohammed Faheem"
        console.log(this);
}

// chai()

// const addTwo = (num1  , num2) => {  BASIC ARROW FUNCTION(EXPLICIT RETURN)
//     return num1 + num2
// }

// const addTwo = (num1  , num2) =>  num1 + num2 // Called As Implicit Return


// const addTwo = (num1  , num2) =>  (num1 + num2) // Another way by giving PARANTHESIS

// HOW TO return OBJECTS
const addTwo = (num1  , num2) =>  ({username : "Faheem"})
// {username : Fahemm} it doesn't return because we have to give in ()
console.log(addTwo(3 , 4));

// *********** IMPORTANT **********
// * if curly brace is there 'return' keyword must be used
// * if it's not there then no need