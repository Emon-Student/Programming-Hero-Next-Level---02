//? Class and Object and Construction
// class Student {
//   Name: string;
//   age: number;

//   constructor(Name: string, age: number) {
//     this.Name = Name;
//     this.age = age;
//   }
// }

// const Emon = new Student("Emon Hossain Hira", 22);

// console.log("Emon Data", Emon.Name, Emon.age);

class Teacher {
  Name: string;
  Id: number;
  constructor(Name: string, Id: number) {
    this.Name = Name;
    this.Id = Id;
  }

  display(): void {
    console.log(`User Name is ${this.Name}.\nUser ID is ${this.Id}`);
  }

  //? Copy Data
  copyData(): Teacher {
    return new Teacher(this.Name, this.Id);
  }
}

const P = new Teacher("Hello", 369);
const Q = P.copyData();

P.display();
Q.display();

class Manager {
  constructor(
    public Name: string,
    public salary: number,
  ) {
    this.Name = Name;
    this.salary = salary;
  }
  Display(): void {
    console.log("Show Data", this.Name, this.salary);
  }
  Clone(): Manager {
    return new Manager(this.Name, this.salary);
  }
}

const s = new Manager("EH Hira", 0);
const r = s.Clone();
s.Display();
r.Display();

class Product {
  constructor(
    public Food: string,
    private Money: number = 0,
  ) {
    this.Food = Food;
    this.Money = Money;
  }
  showData(): void {
    console.log("Show Data", this.Food, this.Money);
  }
  get getData(): number {
    return this.Money;
  }
  set setData(money: number) {
    if (money > 0) this.Money += money;
  }
}

const item = new Product("mango", 78);
item.showData();
item.getData;
item.setData = 45845;
item.showData();

class Vehicle {
  constructor(
    public colour: string,
    public carName: string,
  ) {
    this.colour = colour;
    this.carName = carName;
  }
  display(): void {
    console.log("Show Data", this.colour, this.carName);
  }
  get getData(): string {
    return this.colour;
  }
  set setData(colour: string) {
    this.colour = colour;
  }
}

const bike = new Vehicle("Black", "MOTOGP");
bike.display();
const getBike = bike.getData;
console.log("Now get Bike", getBike);
bike.setData = "RED";
bike.display();

//! Practice:01
class Book {
  constructor(
    public title: string,
    public author: string,
    public price: number = 0,
  ) {
    this.title = title;
    this.author = author;
    this.price = price;
  }
  display(): void {
    console.log(
      `/********* Book Info *********\\\nBook Title Name: ${this.title}.\nBook Author Name: ${this.author}.\nBook Price: ${this.price}. `,
    );
  }
  clone(): Book {
    return new Book(this.title, this.author, this.price);
  }
}

const python = new Book("PYTHON", "Emon Hossain Hira", 1500);
const python2 = new Book("Free PYTHON", "Emon Hossain Hira");
const pythonCopy = python.clone();
python.display();
python2.display();
pythonCopy.display();

//! Practice Probleam : 02
class Rectangle {
  constructor(
    public height: number,
    public width: number,
  ) {}
  area(): number {
    return this.height * this.width;
  }
  get perimeter(): number {
    return 2 * (this.height + this.width);
  }
}

const rect = new Rectangle(56.99, 47.63);

console.log(rect.area().toFixed(2));
console.log(rect.perimeter.toFixed(2));

//! Practice: 03
class Student {
  constructor(
    public name: string,
    private _marks: number = 0,
  ) {}
  get marks(): number {
    return this._marks;
  }
  set marks(num: number) {
    if ((num >= 0 && num <= 100)) {
        this._marks = num;
      console.log("accepted");
    } else {
        this._marks = num;
      console.log("Invalid Marks");
    }
  }
  display():void{
    console.log("Student: ",this.name,this._marks);
  }
}

const Emon = new Student("Emon",80);
Emon.display();
Emon.marks = 95;
Emon.marks = 150;

