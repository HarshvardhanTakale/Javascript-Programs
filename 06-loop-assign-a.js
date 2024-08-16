console.log("=================================== 1 =====================================");

var sentence  = "I am very good IT Developer";
var vowels = "aeiou";
var vowelCount = 0;
for (let index = 0; index < sentence.length; index++) {
    var char = sentence.charAt(index);
    char = char.toLowerCase();
    if (vowels.includes(char)) {
         vowelCount++;
    }
}
console.log(`count of vowels : ${vowelCount }`);
console.log("=================================== 2 =====================================");
var sumCube = 0;
for (let index = 1; index <=5; index++) {
    sumCube = sumCube + index *index * index ;   
}
console.log(`SumCube is ${sumCube}`);
console.log("=================================== 3 =====================================");
console.log("================================ function to get odd positioned chars without empty space ============================================");
function oddPositionedChars(sentence) {
    for (let i = 0; i <=sentence.length; i++) {
        if (i%2==1 && sentence.charAt(i)!=" ") {

            console.log(`characters at odd position ${i} =sentence.charAt(sentence)`);  

        }

    }
}
oddPositionedChars("Hard work always pays back");
oddPositionedChars("Soon I will be UI IT Champ");
