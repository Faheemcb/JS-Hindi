// SINGLETON
// const tinderUser = new Object()

const tinderUser = {}
tinderUser.id = "123adsd"
tinderUser.name = "John"
tinderUser.isLoggedin = false

// console.log(tinderUser);

const regularUser = {
    email:"aada@gmail.com",
    fullname : {
        userfullname: {
            firstName : "Mohammed Faheem",
            lastname: " Chalil Abdul Rahman"

        }
    }

}
// console.log(regularUser.fullname.userfullname.lastname);

const obj1 = {1: "a" , 2: "b"}
const obj2 = {3: "a" , 4: "b"}
const obj4 = {5: "a" , 6: "b"}


// const obj3 = {obj1 , obj2}  COMES LIKE ARRAY

// const obj3 = Object.assign({} ,obj1, obj2 , obj4) // COMBINING OBJECTS {} is optional

const obj3 = {...obj1, ...obj2} // ANOTHER WAY OF COMBINING

// console.log(obj3);

// ARRAY OF OBJECTS

const users = [
    {
        id:1,
        email: "aada@gmail.com"
    },
    {
        id:1,
        email: "aeweda@gmail.com"
    },
    {
        id:1,
        email: "e33rda@gmail.com"
    },
]

// console.log(users[2].email);  SAME LIKE ARRAY

// console.log(Object.keys(tinderUser)); """""// Datatype is ARRAY
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser)); // makes value as ARRAY

console.log(tinderUser.hasOwnProperty('isLoggedin')); // Checks whether it's there


// """""""""""""" INSPECT OBJECT TO SEE MORE METHODS AND FUNCTIONS """"""""""""""""""""""



