"use strict";
// let message: string = "Brown";
// console.log(message)
Object.defineProperty(exports, "__esModule", { value: true });
// Number (includes integers, floats, hex, binary)
let age = 25;
let price = 19.99;
// Boolean
let isActive = true;
console.log(isActive);
// Undefined & Null
const undefineVar = undefined;
console.log(undefineVar);
let nullVar = null;
// The `any` Type (Avoid when possible)
let dynamicValue = "I can be anything";
dynamicValue = dynamicValue.toUpperCase();
// console.log(dynamicValue);
// dynamicValue = 42;
// dynamicValue = true;
// dynamicValue = [1, 2, 3];
// The `unknown` Type (safer than any)
let uncertain = "Hello";
// ! If you uncomment this line, TypeScript will block you. Even though you know it's a string, TypeScript enforces strict discipline. It says: "I don't know if this variable has a .UpperCase() method. It could be a number or null"
// uncertain = uncertain.toUpperCase();
if (typeof uncertain === "string") {
    console.log(uncertain.toUpperCase()); // Type narrowed
}
// Arrays -cCollections of some type
let numbers = [1, 2, 3, 5];
// numbers.push(90)  // ERROR - cannot modify
console.log(numbers);
// * `Tuples` : a Tuple is a special type of array that has a fixed number of elements where each element has a specific type. 
let user = ["Ibraheem", 29, true];
console.log(user);
// * Named tuples (Typescript 4.0+)
// let point: [olusola: number, obafemi: number] = [10,20];
// // console.log(point[0])
// const [xCoordinate, yCoordinate] = point;
// console.log(xCoordinate);
let point = [10, 20, "opebe", 90];
// console.log(point[0])
const [, , print, another_ptint] = point;
console.log(print);
// * Optional tuple elements
let optionalTuple = ["hello"];
let tuple = ["hello", 42, true, false, true];
let response = [true, "Data fetched", { id: 1 }];
let message = "Hello";
const user1 = {
    id: 101,
    name: "Alice"
};
const user2 = {
    id: "EMP-99",
    name: "Bob",
    email: "bob@example.com"
};
console.log(user2);
// *** `Interface` : An Interface in Typescript is a rulebook (or a contract) that defines the structure of an object. 
// it tells Typescript: "I expect an object to look exactly like this: it must have these properties, and they must be specific types."
