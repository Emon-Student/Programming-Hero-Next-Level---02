//? Type Guards
//* string number boolean undefined function  null == === !== != 
//* in instance of Discriminated Union
const printProduct = (p) => {
    if (p.type === "fruit")
        console.log("Data", p);
    else
        console.log("Data", p);
};
const mango = {
    type: "fruit",
    name: "Mango",
    price: 1000
};
const rose = {
    type: "flower",
    name: "Rose",
    price: 200
};
printProduct(mango);
printProduct(rose);
class Animal {
    move() {
        console.log("It's Move");
    }
}
class Dog extends Animal {
    bark() {
        console.log("Dog is Barking");
    }
}
const helloFunction = (animal) => {
    if (animal instanceof Dog)
        animal.bark();
    else
        animal.move();
};
let data = new Dog();
helloFunction(data);
class Product {
    items() {
        console.log("My Iteams");
    }
}
class Potato extends Product {
    myitems() {
        console.log("My Potato");
    }
}
const myProduct = (it) => {
    if (it instanceof Potato)
        it.myitems();
    else
        it.items();
};
const myData = new Potato();
myProduct(myData);
const sayPerson = (p) => {
    if ("id" in p)
        console.log("He is a Student");
    else
        console.log("He is a Teacher");
};
let Emon = {
    id: 3041,
    name: "Emon Hossain Hira",
    department: "CSE"
};
let Badsha = {
    isTeacher: true,
    name: "Badsha",
    course: ["MAT-221", "MAT-111"],
};
sayPerson(Emon);
sayPerson(Badsha);
const sayOddandEven = (a) => {
    if (a % 2 == 0)
        return 1;
    else
        return 0;
};
const myNumberEven = sayOddandEven(2);
const myNumberOdd = sayOddandEven(5);
if (myNumberEven == 1)
    console.log("It's Even Number");
else
    console.log("It's Odd Number");
if (myNumberOdd != 0)
    console.log("It's Even Number");
else
    console.log("It's Odd Number");
if (typeof myNumberEven !== "number")
    console.log("It's a wrong type");
if (typeof myNumberEven === "number")
    console.log("Int's Right type");
const mySum = (d) => {
    if (typeof d === "string")
        console.log(d.toUpperCase());
    else
        console.log(d.toFixed(2));
};
mySum("Emon Hossain Hira Akbor Hossain");
mySum(69854);
const sayHello = (a) => {
    if (typeof a === "string")
        return a.slice(1, 4);
    else if (typeof a === "undefined")
        return a;
    else
        return a;
};
const helloString = sayHello("Emon Hossain Hira");
const helloNull = sayHello(null);
const helloUndefined = sayHello(undefined);
console.log("Here all of type guards", helloString, helloNull, helloUndefined);
export {};
