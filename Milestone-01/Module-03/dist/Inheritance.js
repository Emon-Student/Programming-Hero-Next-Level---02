class Parent {
    Name;
    age;
    constructor(Name, age) {
        this.Name = Name;
        this.age = age;
    }
    display() {
        console.log(`He is Name is ${this.Name}.\nHis age ${this.age}`);
    }
    sum(a, b, c) {
        return a + b + (c ?? 0);
    }
}
class Child extends Parent {
    NickName;
    constructor(Name, age, NickName) {
        super(Name, age);
        this.NickName = NickName;
    }
    display() {
        super.display();
        console.log(`NickName Here ${this.NickName}`);
    }
}
const emon = new Parent("Emon Hossain Hira", 23);
emon.display();
let f = emon.sum(10, 20);
let e = emon.sum(10, 20, 30);
console.log("Now Sum of a and b", f, e);
const childClass = new Child("Fatema", 41, "Mother");
childClass.display();
class Company {
    Name;
    Employee;
    _baseSalary;
    details;
    constructor(Name, Employee, _baseSalary, details) {
        this.Name = Name;
        this.Employee = Employee;
        this._baseSalary = _baseSalary;
        this.details = details;
    }
    display() {
        console.log(`It's a Company. Company Name is ${this.Name}.\nHere is Employee ${this.Employee}.\nAll of Employee most salary ${this._baseSalary}.\nHere is Employee Details ${this.details}`);
    }
    get getSalary() {
        return this._baseSalary;
    }
    set setSalary(number) {
        this._baseSalary += number;
        console.log("Here is total salary", this._baseSalary);
    }
}
class Branch extends Company {
    location;
    branchCount;
    constructor(Name, Employee, _baseSalary, details, location, branchCount) {
        super(Name, Employee, _baseSalary, details);
        this.location = location;
        this.branchCount = branchCount;
    }
    display() {
        super.display();
        console.log(`It's Branch Location ${this.location}.\n It's branch number: ${this.branchCount}`);
    }
}
const emp = new Company("Crystal", 50, 100000, "Hello Details");
emp.display();
const bra = new Branch("Crystal", 50, 100000, "Hello Details", "Motijheel", 1);
bra.display();
console.log(bra.getSalary);
bra.setSalary = 500000;
export {};
