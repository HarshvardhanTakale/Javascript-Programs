class Employee {
    constructor(emp_id,emp_name,emp_dept,emp_salary,emp_company){
        this.emp_id=emp_id;
        this.emp_name=emp_name;
        this.emp_dept=emp_dept;
        this.emp_salary=emp_salary;
        this.emp_company=emp_company;
    }
}
const emp_anil = new Employee( 22 , "Anil" , "IT", 50000, "TCS");
const emp_radha = new Employee( 33 , "Radha" , "HR", 74000, "Wipro");
const emp_rishi = new Employee( 55 , "Rishi" , "Finance", 47000, "TCS");
const emp_sonali = new Employee( 66 , "Sonali" , "Finance", 45000, "Infy");
const emp_monika = new Employee( 77 , "Monika" , "IT", 40000, "Wipro");
const emp_vinay = new Employee( 88, "Vinay" , "IT", 75000, "TCS");
const emp_mahi = new Employee( 99, "Mahesh" , "Hr", 85000, "Infy");
console.log("==================== 1 ====================");
const array = [emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_vinay,emp_mahi];
for (const element of array) {
    if (element.emp_company=="TCS") {
        console.log(` Working with Tcs Company Emp Name : ${element.emp_name} And , Company Name  is : ${element.emp_company}`);

    }
}
console.log("==================== 2 ====================");
for (const element of array) {
    if (element.emp_dept=="Finance") {
        console.log(`Employee Work Department is : ${element.emp_dept} And ,  Employee Name is :${element.emp_name}`);    }
}
console.log("==================== 3 ====================");
for (const element of array) {
    if (element.emp_name.startsWith("R")) {
        console.log(` Name Starts With R Employee Name is : ${element.emp_name}`);
    }
}
console.log("==================== 4 ====================");
for (const element of array) {
    if (element.emp_salary > 75000) {
        console.log(` Employee Name : ${element.emp_name}, Company Name : ${element.emp_company}, salary :${element.emp_salary}`);
    }
}
console.log("==================== 5 ====================");
for (const element of array) {
    if (element.emp_salary >= 50000 && element.emp_dept=="IT") {
        console.log(`Employee Id : ${element.emp_id} ,Employee Name : ${element.emp_name} , Employee Department : ${element.emp_dept} , Employee salary : ${element.emp_salary} , Company Name : ${element.emp_company}`);

    }
}
console.log("==================== 6 ====================");
for (const element of array) {
    if (element.emp_company=="Infy") {
        console.log(`Employee Id : ${element.emp_id} ,Employee Name : ${element.emp_name} , Employee Department : ${element.emp_dept} , Employee salary : ${element.emp_salary} , Company Name : ${element.emp_company}`);
    }
}