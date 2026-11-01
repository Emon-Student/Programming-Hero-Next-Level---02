// Problem 1: Student-এর নাম string, বয়স number, student status boolean, unique ID symbol এবং বড় account number bigint দিয়ে variable তৈরি করো। সব print করো।

let student_name: string = "Emon Hossain Hira";
let student_age: number = 23;
let isStudent: boolean = true;
let student_id: symbol = Symbol("3041");
let student_account_number: bigint = 20262203041n;

console.log(
  `Student Name is ${student_name}.
Student age is ${student_age}.
I am a student: ${isStudent}.
My Student ID is ${String(student_id)}.
My Student Account Number is ${student_account_number}.`,
);

// Problem 2: দুটি আলাদা Symbol("id") তৈরি করো এবং === দিয়ে compare করো। ফলাফল কেন এমন হয়, ব্যাখ্যা করো।
const first_id: symbol = Symbol("3042");
const sec_id: symbol = Symbol("3043");

if (first_id === sec_id) console.log("All Same");
else console.log("Are Differenct");

// Problem 3: দুটি বড় bigint number তৈরি করো, যোগ করো এবং ফলাফল print করো।

const f: bigint = 20262203041n;
const g: bigint = 20262203042n;

const h: bigint = f + g;

console.log("Total Sum: ", h);

// Problem 4: string[] দিয়ে পাঁচজনের নামের array তৈরি করো। push() দিয়ে একটি নাম যোগ করো এবং সব নাম print করো।

let nameArray1: string[] = ["Emon", "Hossain", "Hira", "Akbor", "Hasan"];
nameArray1.push("Mahbub");
console.log("String Array: ", nameArray1);

// Problem 5: number[] দিয়ে পাঁচটি number রাখো। তাদের যোগফল এবং array-এর length বের করো।

let numberArray1: number[] = [10, 20, 30, 4, 5, 87, 65];

let sum = 0;

for (let i = 0; i < numberArray1.length; i++) {
  sum += numberArray1[i];
}

console.log("total sum: ", sum);
console.log("Array Length: ", numberArray1.length);

// [x] Problem 6: boolean[] দিয়ে চারটি boolean value রাখো এবং array print করো।

let booleanArray: boolean[] = [false, true, false, true];
console.log("Boolean Array", booleanArray);

// Problem 7: [number, string, boolean] tuple তৈরি করো এবং প্রতিটি element আলাদাভাবে access করো।

const tupleArray: [number, string, boolean] = [3041, "Emon", true];

console.log("Value: ", tupleArray[0]);
console.log("Value: ", tupleArray[1]);
console.log("Value: ", tupleArray[2]);

// [ ] Problem 8: readonly [number, number] tuple তৈরি করো। এর value পরিবর্তন এবং push() করার চেষ্টা করে TypeScript error পর্যবেক্ষণ করো।

let numberTuple: readonly [number, number] = [25.36, 78.456];

// numberTuple.push(100); // Property 'push' does not exist on type 'readonly [number, number]'.

console.log("Error Code", numberTuple[0]);
console.log("Error Code",numberTuple[1]);

// Problem 9: Array<string | number | boolean> দিয়ে mixed array তৈরি করো এবং প্রতিটি ধরনের value যোগ করো।

let nameArray11: Array<string> = ["Islam", "Hindus", "Cristan"];
let numberArray11: Array<number> = [100, 200, 300, 400, 500];
let booleanArray11: Array<boolean> = [false, false, true, false, true, true];

let mixedArray: Array<string | number | boolean> = [
  "Emon",
  "Student",
  3041,
  true,
];

console.log("array of string: ", nameArray11);
console.log("array of number: ", numberArray11);
console.log("array of boolean: ", booleanArray11);
console.log("array of mixed: ", mixedArray);

// Problem 10: দুটি number গ্রহণ করে যোগফল return করে এমন add() function তৈরি করো। Parameter ও return type নির্ধারণ করবে।

const add = (a: number, b: number): number => {
  return a + b;
};

console.log("Total Sum: ", add(10, 60));

// Problem 11: greeting(name: string, profession?: string): void function তৈরি করো। Profession দেওয়া থাকলে সেটিসহ greeting দেখাবে, না থাকলে শুধু নাম দেখাবে।

const greeting = (name: string, profession?: string): void => {
  if (!profession) {
    console.log("No Profession. Only name", name);
  } else {
    console.log(`My name is ${name}.My Profession is ${profession}`);
  }
};

greeting("Emon Hossain Hira", "Student");
greeting("Shadat");

// Problem 12: greetPerson(name: string, role: string = "Guest"): void তৈরি করো। একবার role দিয়ে এবং আরেকবার role ছাড়া call করো।

let greetPerson = (name: string, role: string = "Guest"): void => {
  console.log("My name is" + " " + name + "  and My role is " + role);
};

greetPerson("Emon Hossain Hira");
greetPerson("Emon Hossain Hira", "Admin");

// Problem 14: Rest parameter ব্যবহার করে sumNumbers() function তৈরি করো, যা একাধিক number-এর যোগফল return করবে।

let sumOfNumber = 0;
const sumNumbers = (...numbers: number[]): number[] => {
  for(let i=0;i<numbers.length;i++){
      sumOfNumber += numbers[i];
  }
  return numbers;
};

console.log("All of Number: ", sumNumbers(10, 60, 70, 90, 100, 110));
console.log("sum of allNumber: ",sumOfNumber);

// Problem 15: Address type তৈরি করো, যেখানে street: number এবং houseName: string থাকবে। এই type দিয়ে address object তৈরি করো।

type Address = {
  street: number;
  houseName: string;
};

const address: Address = {
  street: 692,
  houseName: "Sardar Bobhon",
};

console.log("Address is ", address);

// Problem 16: Address type-এর ভেতরে address object রেখে User type তৈরি করো। User-এর নাম, বয়স ও address দিয়ে object তৈরি করো।

type User = {
  name: string;
  age: number;
  address: Address;
};

let Emon: User = {
  name: "Emon Hossain Hira",
  age: 23,
  address: {
    street: 2456,
    houseName: "Unknown Place",
  },
};

console.log("User Info: ", Emon);

// Problem 17: User type ব্যবহার করে দুইজন user-এর object তৈরি করো এবং উভয়ের তথ্য print করো।

let Hossain: User = {
  name: "EHossain Hira",
  age: 22,
  address: {
    street: 2457,
    houseName: "known Place",
  },
};

let Hira: User = {
  name: "EH Hira",
  age: 24,
  address: {
    street: 2458,
    houseName: "No known Place",
  },
};

console.log("User Info: ", Hossain);

console.log("User Info: ", Hira);

// Problem 18: Student নামে interface তৈরি করো, যেখানে name: string, id: number এবং cgpa: number থাকবে।

interface Student {
  name: string;
  id: number;
  cgpa: number;
}

const student: Student = {
  name: "Emon Hossain Hira",
  id: 20262203041,
  cgpa: 3.22,
};

console.log("Student Info", student);

// Problem 19: Student interface ব্যবহার করে দুইজন student-এর object তৈরি করো এবং তাদের তথ্য print করো।
const student1: Student = {
  name: "Roman Bappy",
  id: 20262203001,
  cgpa: 3.86,
};

console.log("Student Info", student1);

const student2: Student = {
  name: "Mahiyan Raihan",
  id: 20262203016,
  cgpa: 3.5,
};

console.log("Student Info", student2);

// Problem 20: তোমার User type alias এবং User2 interface-এর মতো একই properties দিয়ে object তৈরি করো। কোন ক্ষেত্রে type alias এবং interface ব্যবহার করা যায়, নিজের ভাষায় বোঝাও।

interface s {
    name:string
}

interface s {
    age:string
}

type ii = {
    name:string
}

type ii = {
    age:string
}



 1. Interface basically advance topic lagge 
 2. Interface extends theke advance kaj kora jai
 3. Interface duplicate allow kore
 4. need interface keyword for declaration

 1. type basically easy and mid level topic lagge
 2. type advance kaj aa lagge na
 3. type alias duplicate allow kore na
 4. need type keyword need for declaration

