let Name = "EH Hira";
let person = Name;
console.log("My name is ", person);
let Number = 584645;
let myNum = Number;
console.log("My Number is ", myNum);
let hello = "Emon";
if (hello)
    console.log(hello.toUpperCase());
else
    console.log(hello);
const myData = "failed";
let R = {
    published: "January",
    date: "02-01-2027"
};
console.log("Data: ", R.date.toString());
let nameArray = ["Emon", "Hossain", "Hira", "Akbor", "Hossain"];
// nameArray.push("Orange");  readOnly
console.log("Array of ", ...nameArray);
export {};
