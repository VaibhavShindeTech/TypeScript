/****************Without parameter and return type******************************/
function welcome() {
    console.log("Welcome to VaibhavTech");
}
welcome();
/****************With parameter and return type**************************/
function add(num1, num2) {
    return num1 + num2;
}
var result = add(10, 20);
console.log(result);
/****************Anonymous function**************************/
var sub = function (num1, num2) {
    return num1 - num2;
};
var ans = sub(20, 10);
console.log(ans);
/**************Optional Parameter & aptional parameter should be last parameter(here middle name is optional)****************************/
function fullName(firstName, lastName, middleName) {
    return firstName + " " + middleName + " " + lastName;
}
var fname = fullName("vaibhav", "Shinde");
console.log("FullName::" + fname);
/*********************Default Parameter & default parameter should be last parameter************************/
function greetMsg(name, msg) {
    if (msg === void 0) { msg = "Hi"; }
    return msg + " " + name;
}
console.log(greetMsg("Vaibhav", "Hello"));
console.log(greetMsg("Vaibhav"));
/*********************Rest Parameter & it should be last parameter***************************/
function wish(msg) {
    var names = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        names[_i - 1] = arguments[_i];
    }
    console.log(msg + " " + names.join(" , "));
}
wish("Hello", "Vaibhav", "Sandy", "Akshay");
