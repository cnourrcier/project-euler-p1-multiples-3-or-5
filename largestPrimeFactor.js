// Largest Prime Factor

// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the given number?

function isPrime(n) {
    if (n <= 1) return false; // 1 or any number less than 1 is not prime
    if (n <= 3) return true; // 2 and 3 are prime numbers
    if (n % 2 === 0 || n % 3 === 0) return false; // Divisible by 2 or 3 means not prime

    // Start checking from 5, incrementing by 6 each iteration
    for (let i = 5; i * i <= n; i += 6) { // * See note 1
        // Check divisibility by i (6k - 1) and (i + 2) (6k + 1)
        if (n % i === 0 || n % (i + 2) === 0) return false;
    }

    return true; // If no divisors are found, n is prime
}

function getLargestPrimeFactor(number) {

    let largestPrimeFactor = -1;

    // Check for divisibility by 2 and reduce to odd
    while (number % 2 === 0) {
        largestPrimeFactor = 2;
        number /= 2;
    }

    // Check for odd factors from 3 onwards
    for (let i = 3; i <= Math.sqrt(number); i += 2) { // * See note 2
        while (number % i === 0) {
            if (isPrime(i)) {
                largestPrimeFactor = i;
            }
            number /= i;
        }
    }

    // This condition is to check if number is a prime number greater than 2
    if (number > 2 && isPrime(number)) {
        largestPrimeFactor = number;
    }

    return largestPrimeFactor;
}

// Notes:

// 1. After checking divisibility by 2 and 3, you can skip checking multiples of these numbers.
// Any prime number greater than 3 can be written in the form of 6k±1 (where k is an integer). 
// This is because numbers of the form 6k, 6k+2, 6k+3, 6k+4 are all divisible by 2 or 3.
// By incrementing i by 6, you efficiently check potential prime factors without checking every single number.

// 2. key property of factors: if a number n can be factored into two factors a and b (where n = a * b), 
// then at least one of those factors must be less than or equal to the square root of n.
// By checking up to the square root of n, you ensure that you find all possible factors without redundant checks.
// Any factor larger than sqrt(n) would have a corresponding factor smaller than sqrt(n).