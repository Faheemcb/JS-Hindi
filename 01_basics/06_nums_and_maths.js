// Number and Math

// Normal way of declaring
const score = 100
// console.log(score);

const balance = new Number(200) //Explicit way of declaring // defining in object
// console.log(balance);

// console.log(balance.toString()); // now it became string
// console.log(balance.toFixed(2)); // used mainly at ecommerce website

const otherNumber = 123.897
// console.log(otherNumber.toPrecision(3));

const hundereds = 1000000
// console.log(hundereds.toLocaleString('en-IN'));

// +++++++++++++++ Maths +++++++++++++++++++++
// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.7));
// console.log(Math.floor(4.9));
// console.log(Math.max(1,5,6,5,8));
// console.log(Math.min(1,5,6,5,8));

// **** Important ***** //
// Random // 
console.log(Math.random()); // return numbers within 0 and 1
console.log(Math.floor(Math.random()*10) + 1);

// Ex get me number between 10 & 20
const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max- min + 1)) + min);