const showMyIdentity = (name) => {
    return name;
};
const Emon = showMyIdentity("Emon Hossain Hira");
const Data = showMyIdentity(5465);
const isTrue = showMyIdentity(true);
console.log("My name is ", Emon);
console.log("My Number is ", Data);
console.log("My Boolean is", isTrue);
const showMyArray = (array) => {
    return array;
};
const firstArray = showMyArray([10, 20, 30, 40, 50]);
const secondArray = showMyArray(["Emon", "Hossain", "Hira"]);
console.log("My First Array", firstArray);
console.log("My Second Array", secondArray);
const showMyPair = (first, second) => {
    return [first, second];
};
const firstPairArray = showMyPair(10, 20);
console.log("My First Pair Array ", firstPairArray);
const data = {
    name: "Emon Hossain Hira",
    roll: 3041,
};
console.log("User", data);
export {};
