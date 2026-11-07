//? Top Hier
//* any,unknown

let Name:any = "Emon Hossain Hira";
Name = true;
Name = 20262203041

console.log("My Name is ",Name);

let User:unknown = "Hello";

console.log("User is ",User);

//? Core Types
//* string,number

let a:string = "Hello";
let b:number = 2022;

console.log(`${a}! It's not year ${b}`);


//? Unit Types
//* void

const Sum = (a:number,b:number) :void => {
    let allsum = a+b;
    console.log("My Sum is: ",allsum);
}

Sum(10,20);


//? Nullish Type
//* null,undefinded

type data = string | null;

const user:data = null;
const d:data = "TypeScript"

console.log("My User is ",user);
console.log("My data is ",d);

//? Literal Types
//* Number String Boolean Type Alias

type myId = string | number;

const id:myId = "Emon-3041";

console.log("My Id is: ",id);

type User = "Admin" | "User" | "Customer";

const EHHira:User = "Admin";

console.log("HE IS A ",EHHira);

//? Bottom Type
//* Never

interface Successs {
    success: string
}

const msg:Successs = () :never => {
    throw new Error("Hello");
}