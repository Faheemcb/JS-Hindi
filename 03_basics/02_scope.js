// SCOPE START with var,let, const
// {} //SCOPE

// var c  = 300 // if i delcare here still it take inside the scope

// GLOBAL SCOPE
let a = 300
if (true) { 
    let a = 10  // ReferenceError: a is not defined      // MEMORY IS INSIDE THIS SCOPE "ONLY"
    const b = 20 // ReferenceError: B is not defined
    // var c = 30  // 30  delacare var or not same thing happens
//  console.log("INNER " , a);
    // INSIDE IS BLOCK SCOPE
}


// AVOID USING 'var'


// console.log(a);
// console.log(b);
// console.log(c);

// """"' NESTED SCOPE """"""''''
function one() {
    const username = "faheem"
    function two() { // function inside function
        const website = "youtube" 
        console.log(username);
                                                                                                                    
    }
    // console.log(website);

    two()
}
// one()

if (true) {
    const username = "Faheem"
    if(username === "Faheem"){
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website); will not print because it's outside the scope
}

// console.log(username); will not print because the scope is not here

// +++++++++++++++++++ interesting ++++++++++++++
// HOISTING


console.log(addone(5)) //it logs

function addone(num){
    return num+1

}
// addone(5)

//   Called Expression (Example of Hoisting)
console.log(addTwo(5)); // it doesnt logs because of defining function in expression
const addTwo = function(num){
    return num + 2 

}