var interview = function (gradScore, hscScore,sscScore,candidateName){
    if(gradScore>= 70 || hscScore>=80 || sscScore>=90) {
        console.log(`Congrats ${candidateName} : you are eligible for TCS interview `);
    } else {
        console.log(`unfortunately ${candidateName} : you are  not eligible for TCS interview `);
        
    }

}
interview(80,86,90,"Harshvardhan");
interview(70,65,55,"Hanmant");
interview(60,79,88,"Rohan");
