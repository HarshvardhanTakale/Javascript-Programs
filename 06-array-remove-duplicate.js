const arrayNum = [11, 3, 4, 11, 4, 7, 3];
const Array = [];

for (let i = 0; i < arrayNum.length; i++) {
  let isDuplicate = false;
  for (let j = 0; j < Array.length; j++) {
    if (arrayNum[i] === Array[j]) {
      isDuplicate = true;
      break;
    }
  }
  if (!isDuplicate) {
    Array.push(arrayNum[i]);
  }
}

console.log(Array);
