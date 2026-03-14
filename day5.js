// // callbacks, promises, async/await, setTimeout, ErrorHandlning, Fetch API, DOM, Local Storage & Cookies, Event Bubbling & Capturing 

// // Callbacks

// function greet(name, callback){
//     console.log("Hello " + name);
//     callback();
// }

// greet("Shruthi",()=>{
//     console.log("Welcome to JavaScript!");
// })

// // Async callback

// // Introducing setTimeout

// console.log("Start");
// setTimeout(()=>{
//     console.log("Vadinamma & Anna");
// }, 2000);
// console.log("End");

// Callback with Array Functions

const numbers = [1, 2, 3, 4, 5];
numbers.map(function(num){
    return num * 2;
});

const sqnum = numbers.map(num => num * num);


// Callback HELL 

// setTimeout(() => {
//     console.log("First callback");
//     setTimeout(() => {
//         console.log("Second callback");
//         setTimeout(() => {
//             console.log("Third callback");
//         }, 1000);
//     }, 1000);
// }   , 1000);

//Promises - Handling Asynchronous Operations

//  represnts a value that will be available in the future, either resolved or rejected.

// promises - 3 states - pending, resolved, rejected

// const myPromise = new Promise((resolve, reject) => {
//     const success = false;
//     if(success){
//         resolve("Promise resolved successfully!");
//     } else {
//         reject("Promise rejected!");
//     }   
// });

// myPromise.then(result=>console.log(result))
// .catch(error => console.log(error))


// Async - Await

// Async Await is just a cleaner way to write a Promise.

// fetch("https://jsonplaceholder.typicode.com/posts")
// .then(response => response.json())
// .then(data => console.log(data))
// .catch(error => console.log(error))

// async function getData(){
//     const response = await fetch("https://jsonplaceholder..com/posts");
//     const data = await response.json();
//     console.log(data);
// }

// getData();

//ErroHandling
//Try & Catch

// async function getData(){
//     try {
//         const response = await fetch("https://jsonplaceholder.typicod.com/postss");
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log("Error fetching data: ", error);
//     }
// }
// getData();

console.log("Sathwik loves ____");
fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log("Error fetching data: ", error));
//Fetch API

/* Fetch request
Server Response
Converting to JSON
Use Data */
const title = document.getElementById("title");
const changeTitleBtn = document.getElementById("ChangeT").addEventListener("click",()=>{
    title.textContent = "Sathwik loves both Phani & Surya"
})

//Event Bubbling & Capturing

// Event Bubbling - When an event occurs on an element, it first runs the handlers on it, then on its parent, then all the way up on other ancestors. This is called bubbling.
//Event Capturing - When an event occurs on an element, it first runs the handlers on the ancestors from the root down to the target element. This is called capturing.

// Example of Event Bubbling
document.getElementById("title").addEventListener("click",()=>{
    console.log("Title clicked");
});
//Example of Event Capturing
document.getElementById("title").addEventListener("click",()=>{
    console.log("Title clicked - Capturing");
}, true);

//Local Storage & Cookies
localStorage.setItem("name", "Sathwik");
const name = localStorage.getItem("name");
console.log(name);
localStorage.removeItem("name");
localStorage.clear();



