console.log("======== 1 - log element and index =============");
const arrayNumbers = [1,-7,40,502,-77,91,0,108,89,-601];
arrayNumbers.forEach((element,index)=>{
    console.log(` Element is : ${element} , Index is :${index}`);
})
console.log("======== 2- find positive num and log  =============");
console.log(arrayNumbers);
arrayNumbers.forEach((element)=>{
    if (element> 0) {
        console.log(`Positive Number is : ${element}`);
        
    }
})
console.log("======== 3-find Negative num and log  =============");
console.log(arrayNumbers);
arrayNumbers.forEach((element)=>{
    if (element< 0) {
        console.log(`Negative Number is : ${element}`);
        
    }
})
console.log("======== 4- even numbers   =============");
console.log(arrayNumbers);
arrayNumbers.forEach((element)=>{
    if (element%2==0) {
        console.log(`Even Number is : ${element}`);
        
    }
})
console.log("======== 5- find sum of all element  =============");
console.log(arrayNumbers);
let sum = 0;
 arrayNumbers.forEach((element)=>{
    sum =  element+element;
})
console.log(` Sum of all element is : ${sum}`);

console.log("======== 6 - log only even indexed array value   =============");
console.log(arrayNumbers);
arrayNumbers.forEach((element,index)=>{
    if (index%2==0) {
        console.log(`index : ${index} , Element : ${element}`);
    }
})
 





