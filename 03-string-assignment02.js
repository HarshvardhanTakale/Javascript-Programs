 function stringHandsOn() {
console.log("================================ Step1 =====================================");
var string = "    Hey you are doing good,keep it up    ";
console.log("The Given String is:",string);
console.log("================================ Step2 =====================================");
 var result = string.length;
 console.log("The Length of String is:",result);
 console.log("================================ Step3 =====================================");
 var string = "  Hey you are doing good,keep it up    ";
 var string1 = string.trim();
 console.log("After Trim String: ",string1);
 var AfterLength = string1.length;
 console.log("Length is : ",AfterLength);
 console.log("================================ Step4 =====================================");
 console.log("Total number of extra space removed : ",result-AfterLength);
 console.log("================================ Step5 =====================================");
 var firstString = string1.charAt(0);
 var lastString = string1.charAt(32);
 console.log("The first & last character are =",firstString,lastString);
 console.log("================================ Step6 =====================================");
 var string =string.split(" ");
 console.log("Total words available after step 3 = ",string.length);
 console.log("================================ Step7 =====================================");
var index = string1.indexOf("good");
console.log("index of good : ",index);
 console.log("================================ Step8 =====================================");
 console.log("substring starting from index 22 = ",string1.substring(22));
 console.log("================================ Step9=====================================");
 var result = string.includes("up");
console.log("The string ends with up = ",result);
 console.log("================================ Step10 =====================================");
 var result = string.includes("Hey");
 console.log("The string start with up = ",result);
 }
 stringHandsOn();
