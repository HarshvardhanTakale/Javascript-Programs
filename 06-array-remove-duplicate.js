const arrayNum = [11, 3, 4, 11, 4, 7, 3];
const uniqueArray = [];

for (let i = 0; i < arrayNum.length; i++) {
  let isDuplicate = false;
  for (let j = 0; j < uniqueArray.length; j++) {
    if (arrayNum[i] === uniqueArray[j]) {
      isDuplicate = true;
      break;
    }
  }
  if (!isDuplicate) {
    uniqueArray.push(arrayNum[i]);
  }
}

console.log(uniqueArray);