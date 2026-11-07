abstract class Parent{
    constructor(public Name:string,public age:number){}
    stop():void{
        console.log("Stop your code");
    }
    abstract start():void
}

class Student extends Parent{
    constructor(Name:string,age:number){
        super(Name,age);
    }
    override start(): void{
        console.log("Start Your Code");
    }
}

class Teacher extends Parent{
    constructor(Name:string,age:number){
        super(Name,age);
    }
    override start(): void{
        console.log("Start Your Code");
    }
    override stop(): void {
        console.log("Stop Your Code");
    }
}

const emon = new Student("Emon Hossain Hira",23);
emon.start();
emon.stop();
const hossain = new Teacher("Emon Hossain Hira",23);
hossain.start();
hossain.stop();