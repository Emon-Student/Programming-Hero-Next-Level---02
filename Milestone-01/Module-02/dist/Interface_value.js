//! Interface
const student3 = {
    name: "Emon Hossain Hira",
    age: 23,
    isStudent: true,
    mysemester: "51-1",
};
const teacher3 = {
    name: "Faisal Badsha",
    age: 22,
    deparment: "    ComputerScienceandTechnology  ",
    isTeacher: true
};
console.log("I am a Student", student3);
console.log("I am a Teacher ", teacher3, teacher3.deparment.trim());
const t = typeof (teacher3);
console.log("Type of ", t);
export {};
