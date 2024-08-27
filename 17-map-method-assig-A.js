
console.log("================  1- add 10 t0 each element ========================");
const arrayNumbers = [20,11,40,25,23,11,9,31,60,2,19];
console.log(arrayNumbers);
 const addTen  = arrayNumbers.map((element)=>{
    return element + 10;
 });
 console.log(`After Adding 10 Array is : `);
 console.log(addTen);

console.log(` ==== 2-  Transform array to it's Qube  ===== `);
console.log(arrayNumbers);
const arrayQube = arrayNumbers.map((element)=>{
    return element * element*element;
});
console.log(arrayQube);
console.log(`======== ==== 3- Add index array   ===== `);
console.log(arrayNumbers);
const addIndex = arrayNumbers.map((element,index)=>{
    return element + index ;
});
console.log(addIndex);

