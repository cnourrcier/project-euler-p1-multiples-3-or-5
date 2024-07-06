// Largest Palindrome Product

// A palindromic number reads the same both ways. 
// The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

// Find the largest palindrome made from the product of two n-digit numbers.

function largestPalindromeProduct(n) {
    const upperLimit = Math.pow(10, n) - 1;
    const lowerLimit = Math.pow(10, n - 1);

    let maxPalindrome = 0;

    // Loop through all possible products of two n-digit numbers
    for (let i = upperLimit; i >= lowerLimit; i--) {
        for (let j = i; j >= lowerLimit; j--) {
            const product = i * j;
            const productStr = product.toString();
            const reversedProductStr = productStr.split('').reverse().join('');

            // Check if the product is a palindrome
            if (productStr === reversedProductStr) {
                // Update the largest palindrome found
                if (product > maxPalindrome) {
                    maxPalindrome = product;
                }
            }
        }
    }

    return maxPalindrome;
}