const greet = (name: string): void => {
  console.log(`Welcome to Typescript, ${name}!`);
};

greet("Majed");

////////////////////////////// ==== Types Section ==== //////////////////////////////
console.log("==== Type Section====");

// string, number, boolean, undefined, null:

// boolean:
let isDone: boolean = false; // :boolean
isDone = true; // :boolean
console.log(typeof isDone, isDone);

// undefined:
let u: undefined = undefined; // :undefined
u = undefined; // :undefined
console.log(typeof u, u);

// null:
let n: null = null; // :null
n = null; // :null
console.log(typeof n, n);

// number:
let num1: number = 5; // :number
num1 = 5.5; // :number
console.log(typeof num1, num1);

// string:
let str1: string = "Hello World!"; // :string
str1 = "Hello"; // :string
console.log(typeof str1, str1);

//////////////////////////////////////////////////////////////////////////////////////////////////

//arrays:
let arr: number[] = [1, 2, 3, 4, 5]; // :number[]
let arrStr: string[] = ["a", "b", "c"]; // :string[]

let arr2: (number | string | boolean)[] = [1, 2, "Hello", true]; // : (number | string | boolean)[]
let arrAny: any[] = [1, "Hello", true]; // :any[]

// === test case for type (:any) === //
let value: any = 5;

value = "Hello"; // :any when to re-assign the type for the variable, the typescript is not going to throw an error

// === test case for type (:any) === //

//////////////////////////////////////////////////////////////////////////////////////////////////

//tuple:
let y: [string, number] = ["Hello", 5]; // :[string, number]
y.push(20); //Error: Argument of type '5' is not assignable, Because the tuple is defined with two elements only :[string, number]

let x: (string | number)[] = ["Hello", 5]; // : (string | number)[]
x.push(10); // : (string | number)[]
console.log(typeof x, x); // object [ 'Hello', 5, 10 ]

console.log("==== Type Section====");
////////////////////////////// ==== Types Section ==== //////////////////////////////

////////////////////////////// ==== Functions Section ==== //////////////////////////////

console.log("==== Functions Section====");

const w = () => {
  // if the function return number like the fun w, let to check the hover in the w func to check the type of the function
  return 10;
};

// ==== arrow function with type annotation: ==== //
//Example 1:
const checkType: () => string = () => {
  return "Hello";
};
/*
In the arrow function, we can define the type of the function in three steps:
- The frist step to defind the variable > const checkType
- The second step to define the type of the function > : () => string
- The third step to define the function > = () => { return "Hello"; }
*/

//Example 2:
const typeWithParameter: (x: number, y: number) => number = (x, y) => {
  return x + y;
};

/*
Part 1: const typeWithParameter: (x: number, y: number)
Part 2: => => number = (x, y) =>{return number type;}

- (x: number, y: number) this is type of params
- => number this is type of return, that means the function return ( number )
*/

//Example 3:
const z = (x: string, y: number) => {
  return ["hello", true];
};

// ==== arrow function with type annotation: ==== //

console.log(checkType()); // Hello

console.log("==== Functions Section====");

////////////////////////////// ==== Functions Section ==== //////////////////////////////

////////////////////////////// ==== Interfaces Section ==== //////////////////////////////
console.log("==== Interfaces Section====");

interface Person {
  name: string;
  age: number;
}

let user: Person;
user = {
  name: "Majed",
  age: 23,
};

console.log(user); // { name: 'Majed', age: 23 }

console.log("==== Interfaces Section====");
////////////////////////////// ==== Interfaces Section ==== //////////////////////////////
