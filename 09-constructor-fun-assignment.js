function Bank (bankName,location,ifscCode,brachCode){
    this.bankName=bankName;
    this.location=location;
    this.ifscCode=ifscCode;
    this.brachCode=brachCode;
}
console.log(`============================================ Bank Details ===============================================`);

const yesBank = new Bank ("yesBank","Pune","yes1234",171845);
console.log(` Bank Details : Bank Name = ${yesBank.bankName} || Location = ${yesBank.location} || IFSCCode = ${yesBank.ifscCode} || BranchCode= ${yesBank.brachCode}`);

const sbiBank = new Bank ("sbiBank","Mumbai","sbi3412",234589);
console.log(` Bank Details : Bank Name = ${sbiBank.bankName} || Location = ${sbiBank.location} || IFSCCode = ${sbiBank.ifscCode} || BranchCode= ${sbiBank.brachCode}`);

const mahBank = new Bank ("mahBank","Solapur","mah8976",675423);
console.log(` Bank Details : Bank Name = ${mahBank.bankName} || Location = ${mahBank.location} || IFSCCode = ${mahBank.ifscCode} || BranchCode= ${mahBank.brachCode}`);

const axisBank = new Bank ("axisBank","Bangalore","axis3345",789645);
console.log(` Bank Details : Bank Name = ${axisBank.bankName} || Location = ${axisBank.location} || IFSCCode = ${axisBank.ifscCode} || BranchCode= ${axisBank.brachCode}`);

Bank.prototype.openTime="9 AM IST ";
Bank.prototype.closeTime="6 PM IST ";
console.log(`===================================== log opentime and close time on sbiBank  ==================================`);
console.log(`SBI Bank open At : ${sbiBank.openTime} And Close  At : ${sbiBank.closeTime}`  );
console.log(`====================================== log bankName and close time on  axisBank ==========================`);
console.log(`Bank Name: ${axisBank.bankName} , Close At : ${axisBank.closeTime}`);
console.log(`====================================== log bankName,branchCode,openTime on yesBank ===========================`);
console.log(`Bank Name: ${yesBank.bankName} || Branch Code : ${yesBank.brachCode} ||  Open At : ${yesBank.openTime} `);


