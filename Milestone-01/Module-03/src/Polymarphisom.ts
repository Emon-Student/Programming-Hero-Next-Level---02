class Shape {
  constructor(public a: number) {}
  area(): number {
    return 0;
  }
  display(): void {
    console.log("Area of shape", this.a);
  }
}

class Square extends Shape {
  constructor(a: number) {
    super(a);
  }
  override area(): number {
    return this.a ** 2;
  }
  override display(): void {
    console.log("Area of Square", this.area());
  }
}

const sh = new Shape(10);
sh.area();
sh.display();
const sq = new Square(10);
sq.area();
sq.display();
