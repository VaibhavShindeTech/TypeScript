// 1st way to declare array in typescript
let fruits:string[];
fruits=["mango","chiku","apple","pineapple"];
console.log(fruits);

// 2nd way to declare array in typescript
let animals:Array<string>;
animals=["Tiger",'Lion',"Rabbit",'Tourtise'];
console.log(animals);

// In typescript,Array can be homo and hetro 
let persons:Array<string | number>;
persons=["Ram",20,"Shyam",25,"sandy",26];
console.log(persons);

// store any type of value
let genericArray:Array<any>;
genericArray=["Vaibhav",26,92.65,165,true];
console.log(genericArray);

//index of array
console.log(genericArray[0]);