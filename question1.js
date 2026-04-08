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
    let digits = String(num).split('').map(Number);
    let i = digits.length - 2;

    //finding pivot
    while (i >= 0 && digits [i] <= digits[i + 1]) {
        i--;
    }

    if (i < 0) return -1; //in the case of no possible smaller number

    //finding largest digit to the right smaller than pivot
    let j = digits.length - 1;
    while (digits[j] >= digits[i]) {
        j--;
    }

    //swapping pivot and digit[j]
    [digits[i], digits[j]] = [digits[j], digits[i]];

    //sorting in descending order
    let left = digits.slice(0, i  + 1);
    let right = digits.slice(i + 1).sort((a,b) => b - a);

    let result = Number(left.concat(right).join(''));

    // check for leading zero
    return result < num ?result : -1;
 }


 console.log(nextSmaller(23410));
