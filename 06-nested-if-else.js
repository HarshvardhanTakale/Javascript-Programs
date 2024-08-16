var voteEligible = function(age){
    if ( age==0 || age < 0  || age > 130 ) {
        console.log(`invalid data.Age : ${age}`);
    } else {
        console.log(`valid data : ${age}`);
        if (age>=18) {
            console.log(`eligible for voting`);
        } else {
         console.log(`not eligible for voting`);   
        }
    }
}
    voteEligible(45);
    voteEligible(17);
    voteEligible(8);
    voteEligible(20);
    voteEligible(-10);
    voteEligible(0);
    voteEligible(200);
    voteEligible(null);




