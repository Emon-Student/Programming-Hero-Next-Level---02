class Shape {
    a;
    constructor(a) {
        this.a = a;
    }
    area() {
        return 0;
    }
    display() {
        console.log("Area of shape", this.a);
    }
}
class Square extends Shape {
    constructor(a) {
        super(a);
    }
    area() {
        return this.a ** 2;
    }
    display() {
        console.log("Area of Square", this.area());
    }
}
const sh = new Shape(10);
sh.area();
sh.display();
const sq = new Square(10);
sq.area();
sq.display();
export {};
