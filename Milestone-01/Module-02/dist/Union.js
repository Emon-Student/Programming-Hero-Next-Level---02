//? Union Basic
const Emon = "Pass";
if (Emon == "Pass") {
    console.log("Yes,Pass");
}
else {
    console.log("NO");
}
const Hossain = "Approved";
console.log("Your permission", Hossain);
const user = (id) => {
    return id;
};
let User = user("10");
let Many = user(10);
console.log("user id is: ", User, typeof User, Many, typeof Many);
const Result = "Publish";
console.log("My result is ", Result);
let mynumber = [10, 20, 30, 40, 50];
let myString = ["Emon", "Hossain", "Hira"];
console.log("My array value", ...mynumber);
console.log("My array value", ...myString.join(","));
const isUser = "login";
const isPermission = (u) => {
    if (u == "login")
        console.log("Dashboard");
    else
        console.log("Login");
};
isPermission(isUser);
const person = {
    id: 20262203041,
    name: "Emon Hossain Hira",
    intake: "51-1",
    semester: "FALL",
    programe: "Bsc in C.S.E",
    course: ["MAT-222", "PHY-101", "PHY-102", "CSE-103", "CSE-111", "CSE-112"],
};
const showPerson = (person) => {
    let { id, name, intake, semester, programe, course } = person;
    console.log(`My University id is ${id}.My name is ${name}.My Intake ${intake}.My Semester Name is ${semester}.My Programme is ${programe}.My Course is ${course}.`);
};
showPerson(person);
let E = "Student";
console.log("I am a ", E);
const u = {
    name: "Emon Hossain Hira",
    uid: 20262203041,
};
console.log(`Hello,My name is ${u.name}.\nMy Uid is ${u.uid}.`);
export {};
