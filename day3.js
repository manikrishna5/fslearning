//console.log("Hello Shruthi");
//Variables declaration
// var name = "Shruthi"; //var old version of variable declaration function scope
// var age = 25;
// let city = "Bangalore"; //let is the new version of variable declaration - blockscope
// const country = "India"; //const is used for constant values that cannot be changed //block scope

// //Data types
// let isStudent = true;      //boolean    
// let score = 85.5;        //number
// let hobbies = ["Reading", "Traveling", "Cooking"]; //array
// let person = {          //object
//     name: "Shruthi",
//     age: 25,
//     city: "Bangalore"
// };      
// let undefinedVariable; //undefined
// let nullVariable = null; //

//const ageOfSathwik = 20;

//ageOfSathwik = 21; // This will throw an error because ageOfSathwik is a constant and cannot be reassigned;

// const per = {
//     name: "Sathwik",
//     age : 20,
//     city : "Hyderabad"
// };
// per.age = 21;
// console.log(per.age); // This will print 21 because we can change the properties of a constant object, but we cannot reassign the object itself.

//Functions
// function greet(name) {
//     console.log("Inside the greet function");
//     return "Hello, " + name + "!";
// }
// console.log(greet("Sathwik")); // This will print "Hello, Sathwik!"

// const mul = function(a,b) {
//     return a*b;
// } 
// const ad = function add(a,b){
//     return a+b;
// }
// console.log(ad(5,3)); // This will print 15
// console.log(ad(5,3)); // This will print 8  

//Arrow function
// const sub = (a,b)=> {
//     return a-b;
// }

// const greet = (name)=>"Hello, " + name + "!";


const div = (a,b)=> a/b;

const sq = x => x*x;
const shr = ()=> console.log("Hello from arrow function with no parameters");

//Powerful Array Methods
let numbers = [1, 2, 3, 4, 5];

//Map, filter, reduce
numbers = numbers.map(x=> x*x);
console.log(numbers);


//filter
const selectedNumbers = numbers.filter(x => x > 10);

console.log(selectedNumbers);

//reduce
const sum = numbers.reduce((sm, x) => sm + x, 0);
console.log(sum);

//Destructuring
const person = {
    name: "Shruthi",
    age: 25,
    city: "Bangalore"
};
const {age, nm, city} = person; //object destructuring
console.log(nm);


//spread operator
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combinedArr = [...arr1, ...arr2];
console.log(combinedArr); // This will print [1, 2, 3, 4, 5, 6]

const obj1 = {a: 1, b: 2};
const obj2 = {c: 3, d: 4};
const combinedObj = {...obj1, ...obj2};
console.log(combinedObj); // This will print {a: 1, b: 2, c: 3, d: 4}