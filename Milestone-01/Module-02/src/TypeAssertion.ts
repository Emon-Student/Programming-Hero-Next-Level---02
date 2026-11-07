let Name:any = "EH Hira";
let person = Name as string;

console.log("My name is ",person);

let Number:unknown = 584645;
let myNum = Number as number;

console.log("My Number is ",myNum);


type UserData = string | null;

let hello:UserData = "Emon";

if(hello) console.log(hello.toUpperCase());
else console.log(hello);

type DATA = "success" | "failed";

const myData:DATA = "failed";

type result = {
    published:string,
    date:string,
} 

let R:result = {
    published:"January",
    date:"02-01-2027"
} as const;


console.log("Data: ",R.date.toString());


let nameArray = ["Emon","Hossain","Hira","Akbor","Hossain"] as const;

// nameArray.push("Orange");  readOnly

console.log("Array of ",...nameArray);




