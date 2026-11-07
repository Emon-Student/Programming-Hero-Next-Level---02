//? Type Guards
//* string number boolean undefined function  null == === !== != 
//* in instance of Discriminated Union

interface Fruit {
    type:"fruit",
    name:string,
    price:number
}

interface Flower {
    type:"flower",
    name:string,
    price:number
}

type Parcel = Fruit | Flower;

const printProduct = (p:Parcel) :void => {
    if(p.type==="fruit") console.log("Data",p);
    else console.log("Data",p);
}

const mango:Fruit = {
    type:"fruit",
    name:"Mango",
    price:1000
}

const rose:Flower = {
    type:"flower",
    name:"Rose",
    price:200
}

printProduct(mango);
printProduct(rose);

class Animal{
    move():void{
        console.log("It's Move");
    }
}

class Dog extends Animal {
    bark():void{
        console.log("Dog is Barking");
    }
}

const helloFunction = (animal: Animal | Dog) :void => {
    if(animal instanceof Dog) animal.bark();
    else animal.move();
}

let data = new Dog();

helloFunction(data);



class Product {
    items():void{
        console.log("My Iteams");
    }
}

class Potato extends Product {
    myitems():void{
        console.log("My Potato");
    }
}

const myProduct = (it:Product|Potato) :void => {
    if(it instanceof Potato) it.myitems();
    else it.items();
}

const myData = new Potato();
myProduct(myData);




interface Student {
    id:number,
    name:string,
    department:string
}

interface Teacher {
    isTeacher:boolean,
    name:string,
    course:string[]
}

type Person = Student | Teacher;

const sayPerson = (p:Person) :void => {
    if("id" in p) console.log("He is a Student");
    else console.log("He is a Teacher");
}

let Emon:Person = {
    id:3041,
    name:"Emon Hossain Hira",
    department:"CSE"
}

let Badsha:Person={
    isTeacher:true,
    name:"Badsha",
    course:["MAT-221","MAT-111"];
}

sayPerson(Emon);
sayPerson(Badsha);




const sayOddandEven = (a:number) :number => {
    if(a%2==0) return 1;
    else return 0;
}

const myNumberEven = sayOddandEven(2);
const myNumberOdd = sayOddandEven(5);

if(myNumberEven==1) console.log("It's Even Number");
else console.log("It's Odd Number");

if(myNumberOdd!=0) console.log("It's Even Number");
else console.log("It's Odd Number");

if(typeof myNumberEven !== "number") console.log("It's a wrong type");
if(typeof myNumberEven === "number") console.log("Int's Right type");


type data = string | number;
const mySum = (d:data) :void => {
    if(typeof d === "string") console.log(d.toUpperCase());
    else console.log(d.toFixed(2));
}

mySum("Emon Hossain Hira Akbor Hossain");
mySum(69854);

type Hello = string | null | undefined;

const sayHello = (a:Hello) :Hello => {
    if(typeof a === "string") return a.slice(1,4);
    else if(typeof a === "undefined") return a;
    else return a;
}

const helloString = sayHello("Emon Hossain Hira");
const helloNull = sayHello(null);
const helloUndefined = sayHello(undefined);



console.log("Here all of type guards",helloString,helloNull,helloUndefined);