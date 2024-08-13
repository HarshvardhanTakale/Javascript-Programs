console.log("================== 1 - log first and last element ===========");

const fruit = ["Banana","Orange","Apple","Mango","Water Melon"]
console.log(fruit);
console.log(`first element :${fruit[0]} &&&& Last element :${fruit[fruit.length-1]}`);
console.log();


console.log("======== 2 - add element papaya before banana ==================");
const fruit1 = ["Banana","Orange","Apple","Mango","Water Melon"]
console.log(fruit1);
let har =  fruit1.unshift("Papaya");
console.log(fruit1);
console.log("========= 3 - remove mango element ================");
const fruit2 = ["Banana","Orange","Apple","Mango","Water Melon"]
console.log(fruit2);
let splice = fruit2.splice(3,1);
console.log(splice);
console.log(fruit2);
console.log("======== 4 - add element pineapple at last ==========================");
const fruit3 = ["Banana","Orange","Apple","Mango","Water Melon"]
console.log(fruit3);
 let pine = fruit3.push("Pineapple");
console.log(fruit3);
console.log("========= 5 - insert element dragon fruit before water melon=========");
const fruit4 = ["Banana","Orange","Apple","Mango","Water Melon"]
console.log(fruit4);
let replace = fruit4.splice(4,0,"Dragon Fruit");
console.log(replace);
console.log(fruit4);
console.log("=========== 6 - replace orange with kiwi ====================");
const fruit5 = ["Banana","Orange","Apple","Mango","Water Melon"]
console.log(fruit5);
let replace1 = fruit5.splice(1,1,"Kiwi");
console.log(replace1);
console.log(fruit5);
console.log("================ 7 - log element from index 1 to 4==================");
const fruit6 = ["Banana","Orange","Apple","Mango","Water Melon"]
console.log(fruit6);
 let slice = fruit6.slice(1,5);
 console.log(slice);
console.log("=================== 8 - select last 3 element on log use length  =====================");
const fruit7 = ["Banana","Orange","Apple","Mango","Water Melon"]
console.log(fruit7);
const result = fruit7.slice(fruit7.length-3);
console.log(result);


 




 
