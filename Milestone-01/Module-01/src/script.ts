// Here I practing string number boolean symbol

// Topic: String Number Symbol Boolean BigINT
let Name: string = "Emon Hossain Hira";
let MyNumber: number = 10;
let isActive: boolean = true;
let symbol: Symbol = Symbol("@");
let bigInt: bigint = 545545585455475447574645n;

// Topic: Array Tuple and ReadOnly

let array: Array<string> = ["Emon", "Hossain", "Hira", "Akbor"];
let nameArray: string[] = ["Hello", "World", "Gello"];

array.push("PP");

let barray: Array<number> = [10, 20, 30, 40, 50];
let nameNumber: number[] = [70, 80, 90, 100];

let carray: Array<boolean> = [true, false, false, true];
let nameBoolean: boolean[] = [false, true, true, false];

let personalinfo: [number, string, boolean] = [10, "Emon", true];
let dhakalatlong: readonly [number, number] = [10.54, 111.68];
let alldata: Array<string | number | boolean> = ["Emon", 45, false];

alldata.push("Emon");
// dhakalatlong.push("HH"); // there is error

// Topic : Function Parmeters Default Parameters Optional parameters

const add1 = (a: number, b: number): number => {
  return a + b;
};

const gretting = (a: string, b?: string): void => {
  if (b === undefined) {
    console.log("My name is: ", a);
  } else {
    console.log("My name is", a, "I am a ", b);
  }
};

const grettingPerson = (a: string, b: string = "Guest"): void => {
  console.log(a, b);
};

// Topic: Rest parameters

const restPM = (...numbers: number[]): number[] => {
  return numbers;
};

//  Type Object and Interface
type Address1 = {
  street: number;
  houseName: string;
};

type User1 = {
  Name: string;
  age: number;
  address1: Address1;
};

interface User20 {
  Name: string;
  age: number;
}

const user: User1 = {
  Name: "Emon Hossain Hira",
  age: 23,
  address1: {
    street: 201,
    houseName: "Sarder",
  },
};

const user2: User20 = {
  Name: "Hello",
  age: 326356,
};

// Interface Object and Type
console.log("User",user,"User20",user2);

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
