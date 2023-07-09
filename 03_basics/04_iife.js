
// Immediately Invoked Function Expressions (IIFE)
// *****Sometimes due to pollution from gloabl scopes it creates problem so inorder to remove this issue we use IIFE *******

// function chai (){
//     console.log('DB CONNECTED');
// }
// chai()
// It works but at time where there is pollution in global scope use IIFE just wrapping function with ()

(function chai (){  // NAMED IIFE
    console.log('DB CONNECTED');
}());// very important to end with ;

// Explanation (declaration)(execution)

// USING ARROW FUNCTIONS

// ( () => {
//     console.log('DB CONNECTED TWO');
// } )()

// Just passing name
( (name) => { // SIMPLE IIFE
    console.log(`DB CONNECTED TWO ${name}`);
} )('Fhaeem')

// We have to end IIFE BUT it should know where to end so end the function by giving semicolon