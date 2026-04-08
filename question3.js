// QUESTION
// Find the Largest Element in an Array
// Given an array of integers, find the largest element.
// Example:
// Input: arr = [3, 7, 2, 9, 5] Output: 9

// BDD
/* 
    Input => an array of various elements (numbers)
    Process => going through all the elements in the array and comparing
    Output => the largest element in the array
*/

// PSEUDOCODE


// CODE

const numbers = [ 70, 9, 22, 76, 53, 3, 87 ];

//using .reduce()
let largestNum = numbers.reduce((previous, current) => {
    return (previous > current)?previous :current;
})

console.log("The largest number is:", largestNum);








// Using Math.max
// let largestNum = Math.max (...numbers);

// Using for loop
// let largestNum = numbers[0];

// for (let i = 1; i < numbers.length; i++) {
//     if (numbers[i] > largestNum) {
//         largestNum = numbers[i];
//     }
    
// }

// console.log("The Largest Number is:", largestNum);



