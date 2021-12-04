/****************Without parameter and return type******************************/
function welcome(){
    console.log("Welcome to VaibhavTech");
}
welcome();
/****************With parameter and return type**************************/
function add(num1:number,num2:number) : number{
    return num1+num2;
}
let result:number=add(10,20);
console.log(result);

/****************Anonymous function**************************/

let sub=function(num1:number,num2:number){
    return num1-num2;
}
let ans:number=sub(20,10);
console.log(ans);

/**************Optional Parameter & aptional parameter should be last parameter(here middle name is optional)****************************/

function fullName(firstName:string,lastName:string,middleName?:string) : string{
    return firstName+" "+middleName+" "+lastName;
}
let fname:string=fullName("vaibhav","Shinde");
console.log("FullName::"+fname);

/*********************Default Parameter & default parameter should be last parameter************************/
function greetMsg(name:string,msg:string="Hi"):string{
    return msg+" "+name;
}
console.log(greetMsg("Vaibhav","Hello"));
console.log(greetMsg("Vaibhav"));

/*********************Rest Parameter & it should be last parameter***************************/
function wish(msg:string,...names:string[]){
    console.log(msg+" "+names.join(" , "));
}
wish("Hello","Vaibhav","Sandy","Akshay");
