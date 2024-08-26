console.log("========= 1 ===========");

let Arrow = ()=>{
    console.log(` " Good Morning , Today is Monday " `);
}
Arrow();
console.log("=========  2-a ===========");

let arg = (n1,n2,n3=1)=> {
    console.log(` Multiplication is ${n1*n2*n3}`);
}
arg(5,5,2);
console.log("========= 2- b ===========");
arg(10,4);

console.log("========= 3-a ===========");
let add = (n1,n2,n3,n4,n5)=>{
    let result = n1+n2+n3+n4+n5;
    return result;

}
let Addition= add(100,100,200,349,756);
console.log(`Addition is : ${Addition}`);
console.log("========= 3-c ===========");
let string = add(" i am " , " learning ", " ES6 ", " feature ", " in depth ");
console.log(`Addition of string is : ${string}`);