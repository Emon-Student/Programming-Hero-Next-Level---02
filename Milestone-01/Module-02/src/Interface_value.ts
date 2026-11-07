//! Interface

interface Person {
  name: string;
  age: number;
}

interface Isstudent extends Person {
  isStudent: boolean;
  mysemester: string;
}

interface Teacher extends Person {
  isTeacher: boolean;
  deparment: string;
}

const student3: Isstudent = {
  name: "Emon Hossain Hira",
  age: 23,
  isStudent: true,
  mysemester: "51-1",
};

const teacher3:Teacher = {
    name:"Faisal Badsha",
    age:22,
    deparment:"    ComputerScienceandTechnology  ",
    isTeacher:true
}

console.log("I am a Student",student3);
console.log("I am a Teacher ",teacher3,teacher3.deparment.trim());

const t = typeof(teacher3);


console.log("Type of ",t);