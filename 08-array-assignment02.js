console.log("============= 1 - log total element ====================");
const array = [20,31,40,25,23,11,29,9,60,2,11]
console.log(array);
 let length = array.length;
 console.log(` total element is :${length}`);
 console.log("============= 2 - log first & last element ====================");
 const array1 = [20,31,40,25,23,11,29,9,60,2,11]
 console.log(array1);
 console.log(`first element is : ${array1[0]} &&& last element is : ${array1[array1.length-1]}`);
 console.log("============= 3 - log third last element  ====================");
 const array2 = [20,31,40,25,23,11,29,9,60,2,11]
 console.log(array2);
 console.log(` third last element is :  ${array2[array2.length-3]}`);
 console.log("============= 4 - find all even numbers use for of loop ====================");
 const array3 = [20,31,40,25,23,11,29,9,60,2,11]
 console.log(array3);
for (const element of array3) {
    if (element % 2 ==0) {
        console.log(` Even number is : ${element}`);
    }
}
 console.log("============= 5 - find all odd numbers use for of loop ====================");
 const array4 = [20,31,40,25,23,11,29,9,60,2,11]
 console.log(array4);
for (const element of array4) {
    if (element % 2 ==1) {
        console.log(` Odd number is : ${element}`);
    }
}
 console.log("============= 6 - all element  even positioned element sum  ====================");
 const array11 = [20,31,40,25,23,11,29,9,60,2,11]
 console.log(array11);
 var addition = 0;
 for (let index = 0; index < array11.length; index++) {
    if (index %2 ==0) {
        const element = array11[index];
        addition = addition + element;
    }
 }
 console.log(` Total even element sum is :${addition}`);
 
 console.log("============= 7 - all element  odd positioned element sum ====================");
 const array12 = [20,31,40,25,23,11,29,9,60,2,11]
 console.log(array12);
 var addition = 0;
 for (let index = 1; index < array12.length; index++) {
    if (index %2 ==1) {
        const element = array12[index];
        addition = addition + element;
    }
 }
 console.log(` Total odd element sum is :${addition}`);

 console.log("============= 8 - sum of all element  ====================");
 const array10 = [20,31,40,25,23,11,29,9,60,2,11]
 console.log(array10);
 let sum = 0;
 for (const element of array10) {
    sum = sum + element;
    
 }
 console.log(` sum of all element  is : ${sum}`);

 console.log("============= 9 - find  number which are multiple 5 ====================");
 const array5 = [20,31,40,25,23,11,29,9,60,2,11]
 console.log(array5);
for (const element of array5) {
    if (element % 5 ==0) {
        console.log(`Multiple of 5 is : ${element}`);
    }
}
 console.log("============= 10 - is number 115 is available  ====================");
 const array6 = [20,31,40,25,23,11,29,9,60,2,11]
 console.log(array6);
 let include = array6.includes(115);
 console.log(include);
 console.log("============= 11 - is number 23 is available====================");
 const array7 = [20,31,40,25,23,11,29,9,60,2,11]
 console.log(array6);
 let includes = array7.includes(23);
 console.log(includes);
 console.log("============= 12 - insert 55,66 at index 3  ====================");
 const array8 = [20,31,40,25,23,11,29,9,60,2,11]
 console.log(array8);
 let replace2 = array8.splice(3,0,55,66);
 console.log(array8);
 console.log("============= 13 - delete 3 element start from index 4 ====================");
 const array9 = [20,31,40,25,23,11,29,9,60,2,11]
 console.log(array9);
 let result = array9.splice(4,3);
 console.log(result);
 console.log(array9);
 
 

