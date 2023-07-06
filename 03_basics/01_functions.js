
/// FUNCTIONS   {PART - 1} ///

function SayMyName(){
    // console.log("F");
    // console.log("A");
    // console.log("H");
    // console.log("E");
    // console.log("E");
    // console.log("M");

}

// SayMyName // Reference
// SayMyName()

// function addNumbers(number1 , number2){ //Parameters////
//     console.log(number1 + number2);
// }
// // addNumbers() // => NaN
// addNumbers(9,7) //////////////ARGUMENTS///////
// addNumbers(9,"7")
// addNumbers(9,"a")

///******** */ COMMON MISTAKE ********* ///
// function addNumbers(number1 , number2){ //Parameters////
//     console.log(number1 + number2); // Because it doent return // log is different return is different
// }
// const result = addNumbers(7,1)
// console.log("Result : " ,  result); // Result :  undefined

// INSTEAD ///
// ONE WAY
// function addNumbers(number1 , number2){ //Parameters////
//     let result = number1 + number2 // this result is different
//     console.log("Faheem"); // Before return it executes
//     return result
//     console.log("Print me "); // """""AFTER RETURN IT DOENST TAKE ANYTHING"""""""
// }
// const result = addNumbers(7,1)  // /*/*/This result is different
// console.log("Result : " ,  result);


/////// ANOTHER EASY WAY //////////
function addNumbers(number1 , number2){ //Parameters////
    return number1 + number2 // GIVE RETURN
}
const result = addNumbers(7,1)
// console.log("Result : " ,  result);

function loginUserMessage(username){
    if(!username){ // SAME as (username === undefined)
        console.log("Please Enter the Username ");
        return // if I didn't give return it execute the 57th line code which is not REQUIRED according to the Condition
    }

    return `${username} just logged in`

}

// loginUserMessage("Mohammed Faheem") // You have to CONSOLE it because just Return doesnt Execute beacuse we didnt mention anything to print or store in anither variable///

//  console.log(loginUserMessage("Mohammed Faheem"));
//   console.log(loginUserMessage()); // undefined

 // """"    IF I WANT TO AVOID THIS SITUATION """"""
 // GIVE NAME BY DEFAULT

//  function loginUserMessage(username = "babu"){
//     if(!username){
//         console.log("Please Enter the Username ");
//         return 
//     }

//     return `${username} just logged in`

// }
// console.log(loginUserMessage());  => babu just logged in and if I mention any name in ARGUMENT it OVERRIDES

////// FUNCTION PART1 ENDS /////////

// What if i want to add the items in the cart AND I NEED FUNCTION TO ACCEPT MORE VALUES

// function calculateCartPrice(num1){
//     return num1
// }
// console.log(calculateCartPrice(200,400,800));  => 200


// **** USE REST/SPREAD OPERATOR (...NUM1) 3 DOTS
// function calculateCartPrice(...num1){
//     return num1
// }
// console.log(calculateCartPrice(200,400,800)); // => Returns an Array [ 200, 400, 800 ]

/// ********* INTREVIEW Question ////////

function calculateCartPrice(val1, val2, ...num1){
    return num1
}
//                             val1,val2, rest
// console.log(calculateCartPrice(200,400,800,700,900)) //[ 800, 700, 900 ]      

// """"PASSING OBJECT IN FUNCTION """""""

const User = {
    username : "Mohammed Faheem",
    price : 999 // If I give wrong name it's UNDEFINED
}
//                    Generic Parameter
function handleObject(anyObject){

    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
    

}
handleObject(User)
// handleObject({
//     username : "sam",
//     price: 7800
// })  CAN PASS OBJECT LIKE THIS AS WELL


// ******* PASSING ARRAY IN FUNCTION ***********

const newArray = [100,200,344]

function returnSecondValue(getArray){


    return getArray[1]

}
// console.log(returnSecondValue(newArray));
// console.log(returnSecondValue([744,822,369]));  Same like OBJECT ANY ARRAY returns 744
