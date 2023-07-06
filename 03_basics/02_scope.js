// SCOPE START with var,let, const
// {} //SCOPE

// var c  = 300 // if i delcare here still it take inside the scope

// GLOBAL SCOPE
let a = 300
if (true) {
    let a = 10  // ReferenceError: a is not defined      // MEMORY IS INSIDE THIS SCOPE "ONLY"
    const b = 20 // ReferenceError: B is not defined
    // var c = 30  // 30  delacare var or not same thing happens
 console.log("INNER " , a);
    // INSIDE IS BLOCK SCOPE
}


// AVOID USING 'var'


// console.log(a);
// console.log(b);
// console.log(c);

// """"' NESTED SCOPE """"""''''
function one() {
    const username = "faheem"
    function two() {
        const website = "youtbue" 
        console.log(username);                                                                                                               
    }
    console.log();
}

