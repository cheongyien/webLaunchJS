//function
//1 - basic
function greet(firstName,lastName){
    console.log('Hello',firstName, lastName);
}

greet('Cheong','Yien');
greet('Jeffrey','Cheah');

//2 - calc
function square(number){
    return number*number;
}

let test = square(3);
console.log(test);

//3 - creating an obj
function myDetails(name, dob, address){
    return {
        name,
        dob,
        address
    };
}
myDetails('java',1990/9/9,'somewhere');
myDetails('Elizabeth',12/12/1990,'Sunway');

//4 - anonymous function expression
let run = function(){
    console.log('run');
}
run();

//5 - more eg & comparison
function sum(a,b){
    return a+b;
}

//OR
let sum = function(){
    let total = 0;
    for (let x of arguments)
        total+= x;
    return total;
}

console.log(1,2,3,4,5);

//Exercise 1 - to check if the dimension given is landscape 
// Create a isLandscape function with parameters width and height 
// that will return true if the arguments satisfied the condition for a isLandscape.
// Landscape : width of the photo is more than its height

function isLandscape(width, height){
    return (width>height);
}

console.log(1000,800);

//Exercise 2 - to calculate the discounted price of the item
function discountedPrice(price,discount){
    return price*(1-discount/100);
}

console.log(100,20);


