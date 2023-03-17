// console.log("02" > 1);
// console.log("2" > 1);

console.log(null > 0);  //false
console.log(null == 0); //false
console.log(null >= 0);  //true

// == & > works slightly diiferent

// === checks datatype

// ***************  Memory ************

//Stack (Primitive) , Heap (Non Primitive)

let busName = "KMT"
let anotherBus = busName
anotherBus = "Johny's"

console.log(busName);
console.log(anotherBus);

//Gets a copy for stack

let userOne = {
    email : "user@google.com",
    upi : "keef@ybl"
}

let userTwo = userOne //Getting a copy

userTwo.email = "faheem@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);

//Gets reference for heap