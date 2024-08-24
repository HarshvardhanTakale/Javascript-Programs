

// Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
}

// Array of numbers
const array = [3, 9, 7, 19, 29, 53];

// Count the number of prime numbers in the array
const primeCount = array.filter(isPrime).length;

console.log(primeCount); // Output: 4