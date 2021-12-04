var petName = "dog";
function setPetName() {
    var petName = "cat";
    console.log("Inside function::" + petName);
}
setPetName();
console.log("outside function::" + petName);
var index = 0;
for (var index = 0; index < 6; index++) {
    console.log("Inside for loop::" + index);
}
console.log("outside for loop::" + index);
