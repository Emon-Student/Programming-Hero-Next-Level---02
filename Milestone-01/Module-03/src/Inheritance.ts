class Parent {
  constructor(
    public Name: string,
    public age: number,
  ) {}
  display(): void {
    console.log(`He is Name is ${this.Name}.\nHis age ${this.age}`);
  }
  // //   ! Duplicate function implementation.
  //   sum(a:number,b:number):number{
  //     return a+b;
  //   }
  // //   ! Duplicate function implementation.
  //   sum(a:number,b:number,c:number):number{
  //     return a+b+c;
  //   }

  sum(a: number, b: number): number;
  sum(a: number, b: number, c: number): number;
  sum(a: number, b: number, c?: number) {
    return a + b + (c ?? 0);
  }
}

class Child extends Parent {
  constructor(
    Name: string,
    age: number,
    public NickName: string,
  ) {
    super(Name, age);
  }
  override display(): void {
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
  constructor(
    public Name: string,
    public Employee: number,
    private _baseSalary: number,
    protected details: string,
  ) {}
  display(): void {
    console.log(
      `It's a Company. Company Name is ${this.Name}.\nHere is Employee ${this.Employee}.\nAll of Employee most salary ${this._baseSalary}.\nHere is Employee Details ${this.details}`,
    );
  }
  get getSalary():number{
    return this._baseSalary;
  }
  set setSalary(number:number){
    this._baseSalary += number;
    console.log("Here is total salary",this._baseSalary);
  }
}

class Branch extends Company {
  constructor(
    Name: string,
    Employee: number,
    _baseSalary: number,
    details: string,
    public location: string,
    public readonly branchCount: number,
  ) {
    super(Name, Employee, _baseSalary, details);
  }
  override display(): void {
      super.display();
      console.log(`It's Branch Location ${this.location}.\n It's branch number: ${this.branchCount}`)
  }
}

const emp = new Company("Crystal", 50, 100000, "Hello Details");
emp.display();

const bra = new Branch("Crystal", 50, 100000, "Hello Details","Motijheel",1);
bra.display();
console.log(bra.getSalary);
bra.setSalary = 500000;
