//let is a keyword used to declare block level variable;
/*
if let used inside block then value will not modified outside of block.
*/
var index:number=0;

for (let index = 0; index < 5; index++) {
    console.log("inside for loop::"+index);
}
console.log("Outside for loop::"+index);

console.log("***************************************");

function display(){
    let name:string="ram";
    {
        let name:string="shyam";
        console.log("Inside block::"+name);
    }
    console.log("Outside block::"+name);
}
display();