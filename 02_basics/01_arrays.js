// Arrays

// const myArr = [ 0 , 1 , 2 , 3 , true , 'Faheem'] // Way of declaring array , and can be any type
// console.log(myArr[4]); // way of accessing elements using index
const myArr = [ 0 , 1 , 2 , 3  , 4 , 5] // it's resizable

const myArr2 = new Array(1 , 2 , 3 , 4 , 5) // another way of declaring an array
// console.log(myArr2);

// Array methods
//1. push() add elements
// myArr.push(6);
// myArr.push(7);
//2. pop() no ARGUMENTS  it removes last element from the array
// myArr.pop()
//3. unshift() add element on the start
// myArr.unshift(9)
//4. shift() removes the unshifted element
// myArr.shift()
// 5. includes()
//console.log(myArr.includes(11));
// 6. indexOf()
//console.log(myArr.indexOf(11)); // value doesnt exist it gives -1
//7. join() it joins the array

//const newArr = myArr.join()
//console.log(myArr);
//console.log(typeof newArr); //join binds the error and covert it to string

// SLICE  , SPLICE

console.log("A " , myArr);

const my2 = myArr.slice(1 , 3)

console.log(my2);

console.log("B " , myArr);

const myn2 = myArr.splice(1 , 3)
console.log("C " , myArr);
console.log(myn2);
