//let is a keyword used to declare block level variable;
/*
if let used inside block then value will not modified outside of block.
*/
var index = 0;
for (var index_1 = 0; index_1 < 5; index_1++) {
    console.log("inside for loop::" + index_1);
}
console.log("Outside for loop::" + index);
console.log("***************************************");
function display() {
    var name = "ram";
    {
        var name_1 = "shyam";
        console.log("Inside block" + name_1);
    }
    console.log("Outside block" + name);
}
display();
