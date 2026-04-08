// QUESTION 4

// Check if Array is Sorted
// Problem:
// Given an array, check whether it is sorted in non-decreasing order.
// Example:
// Input: arr = [1, 2, 3, 4, 5]
// Output: True
// Input: arr = [1, 3, 2, 4]
// Output: False

// BDD
/*
    INPUT => an array of numbers
    PROCESS => Sort out the array and arrange the elements in increasing order (from smallest to largest)
    OUTPUT => An array with elements sorted from smallest to largest
 */

// PSEUDOCODE

// CODE

const prices = [22, 35, 50, 60, 84]

function priceSorted(prices) {
    return prices.every((current, index) => {
        if(index === prices.length - 1) 
            return true;

        return current <= prices[index + 1];
    });
}

console.log(priceSorted(prices));


// NOTES

// sorting from smallest to largest

// const age = [54, 2, 43, 23, 17, 5, 7, 10, 38];
/* 
    function compareAge(a,b) {
        return a - b;
        // negative value -> keep order (3-5 = -2)
        // positive value -> swap places (9-5 = 4)
    }

// sorting from largest to smallest (ig is the reverse, b-a) 
*/