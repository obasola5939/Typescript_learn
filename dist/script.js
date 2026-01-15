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
// let user: [string, number, boolean] = ["Ibraheem", 29, true];
// console.log(user);
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
// Combining types
// type BasicUser = {
//     id: UserID;
//     name: string;
//     email?: string;  // Optional property
// };
// const user1: BasicUser = {
//     id:101,
//     name: "Alice"
// };
// const user2: BasicUser = {
//     id:"EMP-99",
//     name: "Bob",
//     email: "bob@example.com"
// };
// console.log(user2);
// *** `Interface` : An Interface in Typescript is a rulebook (or a contract) that defines the structure of an object. 
// it tells Typescript: "I expect an object to look exactly like this: it must have these properties, and they must be specific types."
// interface IUser{
//     id:UserID;
//     name: string;
//     email?: "string";
//     greet(): string;  
// };
// // * Implimentation 
// const user: IUser = {
//     id: 9098,
//     name : "Sodeek",
//     greet() {
//         return `Hello, my name is ${this.name}`;
//     }
// };
// console.log(user.greet());
// ** `never` the never type in Typescript represents a value that will exist or a state that will never be reached. 
// it is a tool to force you to write better code
function throwError(message) {
    throw new Error(message);
}
// Usage
try {
    throwError("Something went wrong");
}
catch (error) {
    console.log("Caught the error! The program is still running");
}
console.log("I can still reach this line");
// ** Enum
// An `enum` (short for Enumeration) is a feature in Typescript that allows you to define a set of named constants. It makes your code more readable and less prone to errors by replacing "magic numbers" or hard-to-remember strings with friendly names.  
var OrderStatus;
(function (OrderStatus) {
    OrderStatus[OrderStatus["Pending"] = 0] = "Pending";
    OrderStatus[OrderStatus["Processing"] = 1] = "Processing";
    OrderStatus[OrderStatus["Shipped"] = 2] = "Shipped";
    OrderStatus[OrderStatus["Delivered"] = 3] = "Delivered";
})(OrderStatus || (OrderStatus = {}));
// Usage
const currentStatus = OrderStatus.Processing;
// console.log(currentStatus);
// String Enums
var UserRole;
(function (UserRole) {
    UserRole["Admin"] = "ADMIN";
    UserRole["Editor"] = "EDITOR";
    UserRole["Viewer"] = "VIEWER";
})(UserRole || (UserRole = {}));
// Usage
// const myRole = UserRole.Admin;
const myRole = UserRole["Viewer"];
// console.log(myRole);
// ** Type Annotations & Inference
// Type Annotations is when explicity tell TypeSCript what type a variable or function should be. You do this by adding a colon : followed by the type.
/*
    let variableName: type = value;
*/
// function greet(name: string){
//     return "Hello " + name;
// }
// function add(a: number, b: number): number{
//     return a + b;
// }
// Type Inference (The "Automatic" Mode)
// Type inference is when TypeScript figures out the type for you based on the value you assigned. You don't write any extra code.
let score = 100;
// TypeScript infers 'score' is a 'number'.
// score = "high";
// Array Methods TypeScript is very smart with arrays. It Knows what is inside them.
const fruits = ["Apples", "Banana", "Orange"];
fruits.forEach((fruit) => {
    // TypeScript Knows 'fruit' is string automatically!
    // You get autocomplete for string methods like .toUpperCase()
    console.log(fruit.toUpperCase());
});
// ** Generics are one of the most powerful features in TypeScript. They allow you to write reuseable code that works wih many different types, while still keeping full type safety.
// ! The problem: Duplication or "Any"
// Imagine you want a function that returns the first of an array.
/*
function getFirstNumber(arr: number[]): number{
    return arr[0];
}
function getFirstString(arr: string[]): string{
    return arr[0];
}
! This is bad You are duplicating logic
*/
// Without generics - DUPLICATE CODE! 😩
function getString(item) {
    return item;
}
function getNumber(item) {
    return item;
}
function getBoolean(item) {
    return item;
}
// Need a new type? Create another function!
// *** The Solution With Generics
// With generics - ONE FUNCTION FOR ALL.
function getItem(item) {
    return item;
}
// Usage:
const str = getItem("Hello"); // T = string
const num = getItem(42); // T = number
const bool = getItem(true); // T = boolean
const arr = getItem([1, 2, 3]); // T = number[]
// Function Types & Signatures
function add(x, y) {
    return x + y;
}
console.log("Add:", add(6, 9));
const subtract = (a, b) => a - b;
console.log("Subtract", subtract(10, 3));
function createUser(name, age) {
    return {
        name,
        age: age || 18 // Default value handling
    };
}
console.log("Create User (NO, age): ", createUser("Amara"));
// Default parameters (better than optional)
function greet(name, greeting = "hello") {
    return `${greeting}, ${name}!`;
}
console.log("Greet (Default):", greet("Ibraheem"));
// Rest parameters
function sum(...numbers) {
    return numbers.reduce((total, n) => total + n, 0);
}
console.log("Sum:", sum(1, 2, 3, 4, 5));
