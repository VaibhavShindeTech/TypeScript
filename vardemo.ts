//var is a keyword.It is used to declare variable.Var is a functional scope.

/*
if variable scope is functional then value outside of function will not be modified.
*/
var petName:string="dog";

function setPetName(){
    var petName:string="cat";
    console.log("Inside function::"+petName);
}
setPetName();
console.log("outside function::"+petName);

console.log("*********************************************");
/*
if variable declared using var keyword in block then value outside the block will be modified; 
*/
var index:number=0;
for (var index = 0; index < 6; index++) {
    console.log("Inside for loop::"+index);    
}

console.log("outside for loop::"+index);