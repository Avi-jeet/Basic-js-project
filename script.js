//this is page 1 problem solving

//this is 1st problem
let carName = "Volvo";

//this is 2nd problem
let firstName = "John"; //this is correct variable
let lastName = "Doe"   //this is correct variable
let age = 35 ; //this is correct variable

//this is 3rd problem
 let i = 10;
 let y = 5;
  i *= y; //x will be 50


//this is 4th problem
let length = 16; // data type is number
let Name = "Johnson"; // data type string 

const x = {
  firstName: "John",  
  lastName: "Doe"
};    // data type is object


//this is 5th problem
function myFunction() {
    alert("Hello World!");
  }
  //call the function
  myFunction();


  //this is 6th problem
  const person = {
    Name: "John",
    age: 50 
   }
  alert("John is 50")


  //this is 8th problem
  const cars = ["Volvo", "Jeep", "Mercedes"];
  alert(cars)

  const Brand = ["Volvo", "Jeep", "Mercedes"]; 
  Brand.unshift("Ford"); //this is new value


  //this is 9th problem
   let avi = Math.random(); //this is random number

   
   let A = jeet.Math.max(10, 20); //return 20


   let B = Math.sqrt(9); //this is square method


   //this is 10th problem
   x = 10;
   y = 5;

   alert(x > y); // This will alert true


   //this page 2 problem solving
   //this is 1st problem
   function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
  }
  
  console.log(celsiusToFahrenheit(0));  // 32
  console.log(celsiusToFahrenheit(25)); // 77


  //this is 2nd problem
  function isEven(num) {
    return num % 2 === 0;
  }
  
  console.log(isEven(4)); // true
  console.log(isEven(7)); // false


  //this is 3rd problem
  function sum(a, b) {
    return a + b;
  }
  
  console.log(sum(3, 4));  // 7
  console.log(sum(10, 20)); // 30


  //this is 4th problem
  function findSmallestNum(arr) {
    return Math.min(...arr);
  }
  
  console.log(findSmallestNum([3, 5, 1, 9]));   // 1
  console.log(findSmallestNum([-1, -5, 0, 10])); // -5

  //this is 5th problem
  function countVowels(str) {
    let vowels = 'aeiouAEIOU';
    let count = 0;
    
    for (let char of str) {
      if (vowels.includes(char)) {
        count++;
      }
    }
    
    return count;
  }
  
  console.log(countVowels("hello world")); // 3
  console.log(countVowels("Javascript")); // 3


  //this is 6th problem
  function getFirstElement(arr) {
    return arr[0];
  }
  
  console.log(getFirstElement([1, 2, 3]));     // 1
  console.log(getFirstElement(["a", "b", "c"])); // "a"



  //this is 7th problem
  function isArrayEmpty(arr) {
    return arr.length === 0;
  }
  
  console.log(isArrayEmpty([]));      // true
  console.log(isArrayEmpty([1, 2, 3])); // false

  
  //this is 8th problem
  function factorialize(num) {
    if (num === 0 || num === 1) return 1; // Base case for 0 and 1
    return num * factorialize(num - 1);    // Recursive case
  }
  
  console.log(factorialize(5)); // 120
  console.log(factorialize(7)); // 5040

  

  //this is 9th problem
  function reverseString(str) {
    return str.split('').reverse().join('');
  }
  
  console.log(reverseString("hello")); // "olleh"
  console.log(reverseString("world")); // "dlrow"


  //this is 10th problem
  function toLowerCase(str) {
    return str.toLowerCase();
  }
  
  console.log(toLowerCase("HELLO WORLD")); // "hello world"
  console.log(toLowerCase("JavaScript")); // "javascript"

  
  //this is 11th problem
  function stringLength(str) {
    return str.length;
  }
  
  console.log(stringLength("hello")); // 5
  console.log(stringLength("world")); // 5

  

  //this is 12th problem
  function mergeArrays(arr1, arr2) {
    return arr1.concat(arr2);
  }
  
  console.log(mergeArrays([1, 2, 3], [4, 5, 6])); // [1, 2, 3, 4, 5, 6]
  console.log(mergeArrays(["a", "b"], ["c", "d"])); // ["a", "b", "c", "d"]

  
  //this is 13th problem
  function getLastElement(arr) {
    return arr[arr.length - 1];
  }
  
  console.log(getLastElement([1, 2, 3]));       // 3
  console.log(getLastElement(["a", "b", "c"]));  // "c"

  
  //this is 14th problem
  function getFirstCharacter(str) {
    return str[0];
  }
  
  console.log(getFirstCharacter("hello")); // "h"
  console.log(getFirstCharacter("world")); // "w"

  

  //this is 15th problem
  function sumArray(arr) {
    return arr.reduce((sum, current) => sum + current, 0);
  }
  
  console.log(sumArray([1, 2, 3, 4]));     // 10
  console.log(sumArray([-1, -2, -3, -4])); // -10
  console.log(sumArray([1.5, 2.5, 3.5]));  // 7.5
  