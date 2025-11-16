/**
 * Function to swap adjacent digits of a number
 * @param {number} n - The input number
 * @returns {(number|boolean)} - The number with adjacent digits swapped or `false` if the length is odd
 */
function swap_adjacent_digits(n) {
    // Check if the length of the number is odd, return `false` in such cases
    if (n.toString().length % 2 != 0) {
        return false;
    }
    var result = 0,
        x = 1;
    // Loop until the number becomes zero
    while (n != 0) {
        // Get the last digit (dg1) and the second last digit (dg2)
        var dg1 = n % 10,
            dg2 = ((n - dg1) / 10) % 10;
        // Swap dg1 and dg2, add to the result with appropriate position
        result += x * (10 * dg1 + dg2);
        // Remove the last two digits from the number
        n = Math.floor(n / 100);
        // Increment the multiplier x by 100
        x *= 100;
    }
    return result; // Return the number with swapped adjacent digits
}

// Test cases
console.log(swap_adjacent_digits(32));  
console.log(swap_adjacent_digits(2837));  
console.log(swap_adjacent_digits(98174));  
console.log(swap_adjacent_digits(849320)); 