const array = [3, 9, 7, 6, 19, 29, 53];
function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

let primeCount = 0;
for (const num of array) {
  if (isPrime(num)) {
    primeCount++;
  }
}
console.log(array);

console.log(`${primeCount}  ${num}`);