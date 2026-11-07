//? Union Basic

type status = "Pass" | "Fail";

const Emon: status = "Pass";

if (Emon == "Pass") {
  console.log("Yes,Pass");
} else {
  console.log("NO");
}

type permission = "Approved" | "Rejected";

const Hossain: permission = "Approved";

console.log("Your permission", Hossain);

const user = (id: string | number): string | number => {
  return id;
};

let User = user("10");
let Many = user(10);
console.log("user id is: ", User, typeof User, Many, typeof Many);

//* Union Literal Union

type result = "Publish" | "Pending" | "Approved" | "Rejected" | "Completed";

const Result: result = "Publish";

console.log("My result is ", Result);

type array = string | number;

let mynumber: array[] = [10, 20, 30, 40, 50];
let myString: array[] = ["Emon", "Hossain", "Hira"];

console.log("My array value", ...mynumber);
console.log("My array value", ...myString.join(","));

type user = "login" | "register";
const isUser: user = "login";

const isPermission = (u: user): void => {
  if (u == "login") console.log("Dashboard");
  else console.log("Login");
};

isPermission(isUser);

//? Object Union

type ID = string | number;
type PROGRAMME = "FALL" | "SUMMER";

interface Person {
  id: ID;
  name: string;
  intake: string;
  semester: PROGRAMME;
  programe: string;
  course: string[];
}

const person: Person = {
  id: 20262203041,
  name: "Emon Hossain Hira",
  intake: "51-1",
  semester: "FALL",
  programe: "Bsc in C.S.E",
  course: ["MAT-222", "PHY-101", "PHY-102", "CSE-103", "CSE-111", "CSE-112"],
};

const showPerson = (person: Person): void => {
  let { id, name, intake, semester, programe, course } = person;

  console.log(
    `My University id is ${id}.My name is ${name}.My Intake ${intake}.My Semester Name is ${semester}.My Programme is ${programe}.My Course is ${course}.`,
  );
};

showPerson(person);

//* Intersection Types

type man = "Student" | "Teacher";
type men = "Husband" | "Women" | "Student";

type Parson = man & men;

let E: Parson = "Student";

console.log("I am a ", E);

interface first {
  name: string;
}

interface first {
  uid: Number;
}

const u: first = {
  name: "Emon Hossain Hira",
  uid: 20262203041,
};

console.log(`Hello,My name is ${u.name}.\nMy Uid is ${u.uid}.`);

