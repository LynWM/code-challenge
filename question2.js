//Question2
/* Implement a function that takes as input three variables, 
and returns the largest of the three. 
Do this without using the Python max() function! */

//BDD
/*
    input - three integers
    process - check which of the three is largest
    output - the largest integer
*/

//Pseudocode
/* 
    1. Define the three variables.
    2. Check if the first variable is the largest by comparing it with the other 2.
       If it is the largest, return it.
    3. If the first variable isn't the largest, repeat step 2 for the second variable.
    4. If the second variable also isn't the largest, repeat step 2 for the third variable.
    5. if the third variable isn't the largest then they are all equal.
*/

//Code

console.log("Question 2");

 let numI;
 let numII;
 let numIII;

 function largestNum(numI, numII, numIII) {
    let greatest;

    if (numI > numII && numI > numIII) {
        greatest = numI;
        console.log("The largest number is: " + greatest);
        
    } else if (numII > numI && numII > numIII) {
        greatest = numII;
        console.log("The largest number is: " + greatest);
        
    } else if (numIII > numI && numIII > numII) {
        greatest = numIII;
        console.log("The largest number is: " + greatest);
        
    } else {
        return console.log("The numbers are equal");
    }
 };

 largestNum(90, 76, 51);