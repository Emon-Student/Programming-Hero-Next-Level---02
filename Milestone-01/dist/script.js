"use strict";
// Here I practing string number boolean symbol
// Topic: String Number Symbol Boolean BigINT
let Name = "Emon Hossain Hira";
let MyNumber = 10;
let isActive = true;
let symbol = Symbol("@");
let bigInt = 545545585455475447574645n;
// Topic: Array Tuple and ReadOnly
let array = ["Emon", "Hossain", "Hira", "Akbor"];
let nameArray = ["Hello", "World", "Gello"];
array.push("PP");
let barray = [10, 20, 30, 40, 50];
let nameNumber = [70, 80, 90, 100];
let carray = [true, false, false, true];
let nameBoolean = [false, true, true, false];
let personalinfo = [10, "Emon", true];
let dhakalatlong = [10.54, 111.68];
let alldata = ["Emon", 45, false];
alldata.push("Emon");
// dhakalatlong.push("HH"); // there is error
// Topic : Function Parmeters Default Parameters Optional parameters
const add1 = (a, b) => {
    return a + b;
};
const gretting = (a, b) => {
    if (b === undefined) {
        console.log("My name is: ", a);
    }
    else {
        console.log("My name is", a, "I am a ", b);
    }
};
const grettingPerson = (a, b = "Guest") => {
    console.log(a, b);
};
// Topic: Rest parameters
const restPM = (...numbers) => {
    return numbers;
};
const user = {
    Name: "Emon Hossain Hira",
    age: 23,
    address1: {
        street: 201,
        houseName: "Sarder",
    },
};
const user2 = {
    Name: "Hello",
    age: 326356,
};
// Interface Object and Type
console.log("User", user, "User20", user2);
//  Rest PM
console.log("The Number of Array: ", restPM(10, 20, 30, 40, 50));
// Function parmeters Default Parameters and Optional Parameters
grettingPerson("Hello", "Emon Hoosain Hira");
grettingPerson("Hello");
console.log(gretting("Emon Hossain Hira", "Student"));
console.log(gretting("Emon"));
console.log("Sum: ", add1(10, 20));
// array - tuple - readonly
console.log("Array is : ", array);
console.log("Array is : ", barray);
console.log("Array is : ", carray);
console.log("Array is using Array Infterface : ", nameArray);
console.log("Array is using Array Infterface : ", nameNumber);
console.log("Array is using Array Infterface : ", nameBoolean);
console.log("Tuple is: ", personalinfo);
console.log("Tuple is: ", dhakalatlong);
console.log("Tuple is : ", alldata);
// string - number - boolean - symbol - bigint
console.log("My name is : ", Name);
console.log("My Number is : ", MyNumber);
console.log("I am a student is ", isActive);
console.log("My Symbol is: ", symbol);
console.log("My Big int is: ", bigInt);
