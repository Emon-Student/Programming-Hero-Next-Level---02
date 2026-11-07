const showMyIdentity = <T>(name: T): T => {
  return name;
};

const Emon = showMyIdentity<string>("Emon Hossain Hira");

const Data = showMyIdentity<number>(5465);

const isTrue = showMyIdentity<boolean>(true);

console.log("My name is ", Emon);
console.log("My Number is ", Data);
console.log("My Boolean is", isTrue);

const showMyArray = <T>(array: T[]): T[] => {
  return array;
};

const firstArray = showMyArray<number>([10, 20, 30, 40, 50]);
const secondArray = showMyArray<string>(["Emon", "Hossain", "Hira"]);

console.log("My First Array", firstArray);
console.log("My Second Array", secondArray);

const showMyPair = <T, K>(first: T, second: K): [T, K] => {
  return [first, second];
};

const firstPairArray = showMyPair<number, number>(10, 20);

console.log("My First Pair Array ", firstPairArray);

interface User<T> {
  name: T;
  roll: T;
}

const data: User<string | number> = {
  name: "Emon Hossain Hira",
  roll: 3041,
};

console.log("User", data);
