console.log("************************************* 1 *****************************************");

function squareOfWordLength(sentence){
    console.log(`Given sentence is: ${sentence}`);
    var result = sentence.split(" ");
    var len = result.length;
    var square = len * len;
    return square;
}
var result = squareOfWordLength("JavaScript");
console.log(`Square of world length is: ${result}`);

var result = squareOfWordLength("Google Chrome");
console.log(`Square of world length is: ${result}`);

var result = squareOfWordLength("Web Developer Smart");
console.log(`Square of world length is: ${result}`);


console.log("************************************* 2 *****************************************");
console.log("=================2.1================");
function lengthOperator(){
    var String="I am Angular Developer";
    console.log(`the length of string "I am Angular Developer" is: ${String.length}`);
    var total=String.split(" ");
    var result=String.length/total.length;
    console.log(`the result after divide:${result}`);

    console.log("=================2.2================");
    var result=String.length*total.length;
    console.log(`the result after Multiplication: ${result}`);

}
    lengthOperator()
