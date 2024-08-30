console.log("===================== 1 - find length and total char in  the string =================");
const str1 ="Hello , World!";
const length1 = str1.length;
console.log(`The string is : "${str1}" && Length is : ${length1}`);
console.log("----------------------------------------------------------------------------------");
const str2 ="Javascript is the language of Internet";
const length2 = str2.length;
console.log(`The string is : "${str2}" && Length is : ${length2}`);
console.log("====================== 2 - log the last char in the string ======================");
function getLastCharacter(str){
    return str.charAt(str.length-1)
}
const str3 ="Hey, my friend, programming language";
const str4 ="I am learning logical program";
const str5 = "Angular";
console.log(`Given String 1 is : "${str3}"`);
console.log(`The last character of the string is : ${getLastCharacter(str3)}`);
console.log("----------------------------------------------------------------------------------");
console.log(`Given String 2 is : "${str4}"`);
console.log(`The last character of the string is : ${getLastCharacter(str4)}`);
console.log("----------------------------------------------------------------------------------");
console.log(`Given String 3 is : "${str5}"`);
console.log(`The last character of the string is : ${getLastCharacter(str5)}`);
console.log("====================== 3 - log the first char in the string ======================");
function getFirstCharacter(str){
    return str.charAt(0)
}
const str6 ="React";
const str7 ="Elon Musk";
const str8 = "Apple founder is Stew Job";
console.log(`Given String 1 is : "${str6}"`);
console.log(`The First character of the string is : ${getFirstCharacter(str6)}`)
console.log("----------------------------------------------------------------------------------");
console.log(`Given String 2 is : "${str7}"`);
console.log(`The First character of the string  is : ${getFirstCharacter(str7)}`);
console.log("----------------------------------------------------------------------------------");
console.log(`Given String 3 is : "${str8}"`);
console.log(`The First character of the string is : ${getFirstCharacter(str8)}`);
console.log("====================== 4 - check given Strings contain word ui or not ======================");
function containsUI(str){
    return str.includes("UI");
}
const str9 ="React - UI Developer";
const str10 ="UI Developer";
const str11 ="Frontend and Backend Technologies";
console.log(`Given String 1 is : "${str9}"`);
console.log(`Does the string  contain "UI" ?  ${containsUI(str9)} `);
console.log("----------------------------------------------------------------------------------");
console.log(`Given String 2 is : "${str10}"`);
console.log(`Does the string  contain "UI" ?  ${containsUI(str10)} `);
console.log("----------------------------------------------------------------------------------");
console.log(`Given String 3 is : "${str11}"`);
console.log(`Does the string  contain "UI" ?  ${containsUI(str11)} `);
console.log("====================== 5 - split a string into an array of substring ======================");
function splitString(str,delimiter){
    return str.split(delimiter);
}
const str12 = "apple,orange,banana";
const str13 = "Stew,Bill,Jenny,Elon";
const result1= splitString(str12,",");
console.log(`"${str12}"`);
console.log(`The array of substring from  is :`,result1);
console.log("----------------------------------------------------------------------------------");
const result2= splitString(str13,",");
console.log(`"${str13}"`);

console.log(`The array of substring from  is :`,result2);
console.log("====================== 6 Reverse  the String  ======================");
console.log("====================== 1 - using predefined method Reverse String  ======================");
function reverseStringUsingMethod(str){
    return str.split('').reverse().join('')
}
const str14 = "Software";
const str15 ="UI Developer";
console.log(`The string is : "${str14}" && Reverse is :${reverseStringUsingMethod(str14)}`);
console.log("----------------------------------------------------------------------------------");
console.log(`The string is : "${str15}" && Reverse is :${reverseStringUsingMethod(str15)}`);
console.log("====================== 2 - without using predefined methodReverse String  ======================");
function reverseStringManually(str){
    let reversed ="";
    for (let i=str.length-1;i>=0 ; i--) {
        reversed +=str[i];
    }
    return reversed ;
}

const str16 = "Web Developer";
const str17 = "Billion Dollar ";
const str18 = "Java";
console.log(`The string is : "${str16}" && Reverse is :${reverseStringManually(str16)}`);
console.log("----------------------------------------------------------------------------------");
console.log(`The string is : "${str17}" && Reverse is :${reverseStringManually(str17)}`);
console.log("====================== 7- count the character a and A   ======================");
function countCharA(str){
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i].toLowerCase () ==="a") {
            count++;
        }
    }
    return count;
}
const str19="JavaScript";
console.log(`The count of 'a' & 'A' in "${str19}" is = ${countCharA(str19)}`);
const str20 ="Do or Die";
console.log(`The count of 'a' & 'A' in "${str20}" is = ${countCharA(str20)}`);

const str21 ="Learn with us, job with us";
console.log(`The count of 'a' & 'A' in "${str21}" is = ${countCharA(str21)}`);

const str22 ="Empowering Dreams,Guaranteeing Futures";
console.log(`The count of 'a' & 'A' in "${str22}" is = ${countCharA(str22)}`);

const str23 ="Anny,My favorite is Apple";
console.log(`The count of 'a' & 'A' in "${str23}" is = ${countCharA(str23)}`);

console.log("====================== 8- count the vowels   ======================");
function vowelsCount(str){
    let count =0 ;
    const vowels = 'aeiouAEIOU';
    for (let i = 0; i<str.length; i++) {
        if (vowels.includes(str[i])) {
            count++;
        }
    }
    return count;
}
const str24 ="JavaScript";
console.log(`String is = "${str24}" And Vowels is = ${vowelsCount(str24)}`);
const str25 ="HTML and CSS";
console.log(`String is = "${str25}" And Vowels is = ${vowelsCount(str25)}`);

const str26 ="Language of Internet";
console.log(`String is = "${str26}" And Vowels is = ${vowelsCount(str26)}`);

const str27 ="I am UI Developer";
console.log(`String is = "${str27}" And Vowels is = ${vowelsCount(str27)}`);

const str28 ="Do or Die";
console.log(`String is = "${str28}" And Vowels is = ${vowelsCount(str28)}`);
console.log("====================== 9- count the word   ======================");
function wordCount(str){
    const word = str.trim().split(" ");
    return word.length;
}
const str29 = "JavaScript The language of internet";
console.log(`String is = "${str29}" And Word of count is = ${wordCount(str29)}`);
const str30 ="Enhance your learning journey with Exclusive Add-ons";
console.log(`String is = "${str30}" And Word of count is = ${wordCount(str30)}`);
const str31 = "Beyond frameworks, Beyond imagination";
console.log(`String is = "${str31}" And Word of count is = ${wordCount(str31)}`);
const str32 = "I am passionate software developer ";
console.log(`String is = "${str32}" And Word of count is = ${wordCount(str32)}`);
console.log("====================== 10 - find the duplicate characters  ======================");
function duplicateCharcount(str){
    const charCount = {};
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (char != " ") {
            charCount[char]=(charCount[char] || 0) +1;
        }
    }
    for (const char in charCount) {
        if (charCount[char] > 1) {
            console.log(`${char} - ${charCount[char]}`);
            
        }
    }
}
console.log(`Duplicate characters in "Banana" And count is `);
duplicateCharcount("Banana");
console.log(" ");
console.log(`Duplicate characters in "Apple" And count is `);
duplicateCharcount("Apple");
console.log(" ");
console.log(`Duplicate characters in "Software Developer" And count is `);
duplicateCharcount("Software Developer");
console.log(" ");

console.log("================================");
let str = "Banana";  // a - 3, n - 2
let finalOutput = {};
for (let index = 0; index < str.length; index++) {
    const element = str.charAt(index);
    let count = 0;
    for (let j = 0; j < str.length; j++) {
        const char = str.charAt(j);
        if (char==element) {
            count++;     
        }
    }
    // console.log(element, count);
    if (count>1) {
        finalOutput[element] = count;
    }  
}
// console.log(finalOutput);
for (const key in finalOutput) {
    const element = finalOutput[key];
    console.log(`${key} - ${element}`);
    
}








