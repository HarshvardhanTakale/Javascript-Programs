 console.log("=======================================");
 
 let professor = {
    firstName:"Virat",
    lastName: "Kohli",
    age : 35,
    isMarried : true ,
    country : "India",
    degrees :{
        engineering : "cse",
        PHD : "Advance computing",

    } ,
    certificates : ["Hacker Rank Participation","certificate in IFE course","certificate in Adv programming"]


}
 console.log(professor);
 console.log("===================  add new property  =======================");
 professor.totalExperience = "14 years";
 console.log(`Total Experiences is : ${professor.totalExperience}`);
 console.log(professor);
 console.log("===================  modify the property  ========================");
 professor.age=60;
 console.log(` updated age is : ${professor.age}`);
 console.log("=================== oracle certificate add index of 2 ========================");
 let array4=professor.certificates.splice(2,0,"Oracle Certified");
 console.log(professor.certificates);
 console.log("=================== log last element in array  =============================");
 console.log(`last element  in Array is : ${professor.certificates[professor.certificates.length-1]}`);
 console.log("=================== traverse the array using for loop  ====================");
 for (const element of professor.certificates) {
    console.log(element);
}
 
console.log("=================== log complete object using for in loop  ====================");
for (const key in professor) {
    if (Object.prototype.hasOwnProperty.call(professor, key)) {
         const element = professor[key];
        console.log(`${key}, ${element}`);
    }
}




 
 
 
 