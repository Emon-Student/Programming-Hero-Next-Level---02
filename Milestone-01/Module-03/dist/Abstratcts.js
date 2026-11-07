class Parent {
    Name;
    age;
    constructor(Name, age) {
        this.Name = Name;
        this.age = age;
    }
    stop() {
        console.log("Stop your code");
    }
}
class Student extends Parent {
    constructor(Name, age) {
        super(Name, age);
    }
    start() {
        console.log("Start Your Code");
    }
}
class Teacher extends Parent {
    constructor(Name, age) {
        super(Name, age);
    }
    start() {
        console.log("Start Your Code");
    }
    stop() {
        console.log("Stop Your Code");
    }
}
const emon = new Student("Emon Hossain Hira", 23);
emon.start();
emon.stop();
const hossain = new Teacher("Emon Hossain Hira", 23);
hossain.start();
hossain.stop();
export {};
