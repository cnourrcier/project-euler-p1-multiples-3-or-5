// Smallest Multiple

// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to n?

function gcd(a, b) {
    while (b != 0) {
        [a, b] = [b, a % b];
    }
    return a;
}

function lcm(a, b) {
    return (a * b) / gcd(a, b);
}

function smallestMult(n) {
    let smallestMultiple = 1;
    for (let i = 1; i <= n; i++) {
        smallestMultiple = lcm(smallestMultiple, i);
    }
    return smallestMultiple;
}

smallestMult(20);


// Greatest Common Denominator (GCD):
// The Euclidean algorithm repeatedly reduces the problem size by using the property that the GCD of two numbers also divides their remainder.
// This reduction continues until a remainder of 0 is reached, at which point the last non-zero remainder is the GCD.

// Least Common Multiple (LCM):
// Once the GCD is known, the LCM can be computed using:
// LCM(a,b)= ∣a×b∣/GCD(a,b)
// This formula works because the product of two numbers is equal to the product of their GCD and LCM:
// a×b = GCD(a, b)×LCM(a, b)


// Pseudocode:
// 1. Define the function smallestMultiple(n) that accepts an integer n.
// 2. Define a helper function to calculate the GCD of two numbers using the Euclidean algorithm.
// 3. Define a helper function to calculate the LCM of two numbers using the GCD.
// 4. Initialize a variable to store the current LCM, starting with 1.
// 5. Iterate through all numbers from 1 to n, updating the current LCM by computing the LCM of the current value and the next number in the range.
// 6. Return the resulting LCM after the loop.