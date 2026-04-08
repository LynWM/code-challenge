// Question
/*Task: Write a function that takes a positive integer and r
eturns the next smaller positive integer containing the same digits.
 Example:
next_smaller(21) == 12
next_smaller(531) == 513
next_smaller(2071) == 2017 */

//BDD
    /* 
        input = a number with 2 or more digits
        process = rearrange digits to obtain the next smaller number
        output = next smaller number
    */
//Pseudocode

/*
    1. Convert the number to a string and to an array so that we can work with indices.
    2. Start comparing the digits from the rightmost side/the end.
    3. If the last digit is less than the second last, swap.
    
*/

//Code
console.log("Question 1");

 function nextSmaller(num) {
    const digits = String(num).split('').map(Number);

    for (let i  = num.length - 1; i > 0 ; i--) {
        if (digits [i - 1] > digits [i]) {
            break;
        } 
    }

    const pointIndex = i - 1;
    const pointValue = digits[pointIndex];

    let swapPlace;
    for (let j = num.length -1 ; j > pointIndex; j--) {
        if (digits[j] < pointValue) {
            swapPlace = j;
            break
        }
        
    }
 }

 nextSmaller(892);

 console.log(nextSmaller(872));
