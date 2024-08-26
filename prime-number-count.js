console.log("================= prime number count ============");
function isPrime (num){
    for (let index = 2; index < num; index++) {
if (num%index==0) {
    return false;
}        
    }
    return true;
}
const array = [3,9,7,6,19,29,53];
let count = 0;
let primeNo=[];
for (const element of array) {
    var result = isPrime(element);
    if (result==true) {
        primeNo.push(element);
        count ++ ;
        
    }
    
}
console.log(`The total count of prime number in array [${array}] is =`,count);
console.log(" ");
console.log(`And the prime no are =`,primeNo);

console.log("======================= count white space =================");
function spaceCount (str){
    let countSpace = 0 ;
    for (let i = 0; i < str.length; i++) {
        if (str[i]==" ") {
            countSpace ++ ;
            
        }
    }
    return countSpace;
}
const str1 = "Revision is mother of success";
console.log(`The total space of count or string [${str1}] is = ${spaceCount(str1)}`);
console.log(" ");
const str2 = "Javascript is the language of internet word";
console.log(`The total space of count or string [${str2}] is = ${spaceCount(str2)}`);
console.log(" ");





