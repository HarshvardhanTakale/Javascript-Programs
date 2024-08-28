const arrayRollNumbers = [113,45,56,11,32,45,109,799,56,45]
console.log("======================== 1 ======================");
console.log(arrayRollNumbers);
console.log(`  Reverse array is : `);
 const arrayReverse = arrayRollNumbers.reverse();
console.log(arrayReverse);
console.log("======================== 2 ======================");
console.log(arrayRollNumbers);
console.log(`  Sorted array is : `);
const arraySort = arrayRollNumbers.sort();
console.log(arraySort);
console.log("======================== 3 ======================");
console.log(arrayRollNumbers);
console.log(`  Ascending Order array is : `);
const arrayAscending = arrayRollNumbers.sort( (n1, n2)=>{
    return n1>n2 ? 1 : -1; 
});
console.log(arrayAscending);

console.log("======================== 4 ======================");
console.log(arrayRollNumbers);
const greatestNumber = Math.max(...arrayRollNumbers);
console.log(`  Greatest number from  the array is : ${greatestNumber} `);

console.log("======================== 5 ======================");
console.log(arrayRollNumbers);
const smallestNumber = Math.min(...arrayRollNumbers);
console.log(`  Smallest number from the   array is : ${smallestNumber}`);
console.log("======================== 6 ======================");
console.log(arrayRollNumbers);
console.log(` After Removing duplicate element`);
const Array = [];
for (let i = 0; i < arrayRollNumbers.length; i++) {
  let isDuplicate = false;
  for (let j = 0; j < Array.length; j++) {
    if (arrayRollNumbers[i] === Array[j]) {
      isDuplicate = true;
      break;
    }
  }
  if (!isDuplicate) {
    Array.push(arrayRollNumbers[i]);
  }
}

console.log(Array);





