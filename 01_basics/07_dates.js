// Dates is Object in JS

let myDate = new Date()
// console.log(myDate); /// Generic
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate); // Object

// To create a specific date

// const myCreatedDate = new Date(2023 , 5 , 18); // Month starts from 0 in JS
const myCreatedDate = new Date(2023 ,0 ,23 , 5 ,3) // Another way of declaring
// console.log(myCreatedDate); //Generic
// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toLocaleString());
// in yy-mm-dd format
// const date = new Date("2023-01-17")
const date = new Date("01-01-2017") // dd-mm-yy format
// console.log(date.toLocaleString());

let myTimeStamps = Date.now()
// console.log(myTimeStamps); //miliseconds
// console.log(myCreatedDate.getTime()); // inordered to compare

// To convert into seconds //
// console.log(Math.floor(Date.now() /1000));

let newDate = new Date()
console.log(newDate.getDay() + 1);
console.log(newDate.getMonth());

// another USCASE of localeString
newDate.toLocaleString('default' , {
    weekday: "long"
})


