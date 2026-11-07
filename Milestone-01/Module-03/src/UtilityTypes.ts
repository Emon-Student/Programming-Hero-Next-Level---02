//? Partial Required Pick

interface User {
  name: string;
  age: number;
  department: string;
}

const emon: User = {
  name: "Emon Hossain Hira",
  age: 23,
  department: "CSE",
};

const updateStudent: Partial<User> = {
  name: "EH Hira",
};

console.log("User of ", emon);
console.log("Update of ", updateStudent);

interface Product {
  Name?: string;
  Price?: number;
  description?: string;
}

const mango: Product = {
  Name: "Mango",
  Price: 100,
};

const Mango: Required<Product> = {
  Name: "Mango",
  Price: 200,
  description: "Hello Mango Update",
};

console.log("First No Required", mango, "Second Required", Mango);

interface Family {
  grandFather: string;
  grandMother: string;
  Father: string;
  Mother: string;
  Brother: string;
  Sister: string;
}

type FamilyProfile = Pick<Family, "Mother" | "Sister">;
type familyProfile = Omit<Family, "Mother" | "Sister">;

const family: FamilyProfile = {
  Mother: "Fatema",
  Sister: "Tanzina",
};



const family2: familyProfile = {
    grandFather:"Badsha",
    grandMother:"Toyoba",
    Father:"Mamun",
    Brother:"No-Name",

}

console.log("My Family", family);
console.log("My Family", family2);

type CourseTitle = string;
type Types = string | number | boolean;

const user:Record<CourseTitle,Types> = {
    Name: "CSE-111",
    Teacher:"Sharboni Das",
    Mark:100
}


console.log("User data: ",user);

type Subjects = "Physics" | "Chemistry" | "Math";

type Marks = Record<Subjects, number>;

const emon9:Marks = {
    "Physics":85,
    "Chemistry":90,
    "Math":95,
}

console.log("User Marks",emon9);