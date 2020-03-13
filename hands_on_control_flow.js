//if...else
let hungry = false;
if (hungry >= true){
    console.log("I'm hungry!!!Feed me now!!!!");
}
else
    console.log("I'm not hungry");


//switch....case
let choice;

switch (choice){
    case 'A':
        console.log('I chose A');
        break;
    case 'B':
        console.log('I chose B');
        break;
    case 'C':
        console.log('I chose C');
        break;
    default:
        console.log('Please make a choice');
    
}


// if (choice === 'A'){
//     console.log('I chose A');
// }
// else if (choice === 'B'){
//     console.log('I chose B');
// }
// else (choice === 'C'){
//     console.log('I chose C');
// }


//for loop
for (let count = 0; count <5; count ++){
    console.log('I love webLaunch!');
}


//While loop
let count = 0 ;
while (count <5){
    console.log('I love Javascript!');
    count++;
}

//Object Person
let person = {
    name = 'Sunway Tech Club',
    age: 18
};

for (let properties in person ){
    console.log(properties); //only printing properties
    // to print the properties and value
    console.log(properties,person.properties);
}


//Array
const colours = [red, orange, yellow, green, blue, indigo, purple];

for (let item of colours){
    console.log(item);
}


//Exercise 1
//Create a function that will return the total,that was calculated 
//by adding from numbers that are divisible by either 3 or 5 in the range 
//of value stated 

function sum (num){
    let total = 0;
    for (let count = 0; count <= num; count++)
        if (count%3===0 ||count%5===0)
            total += count;
    
    return total;
}

//Exercise 2 - show pattern of stars
// *
// **
// ***
// ****
// *****

function showStars(num){
    for (let row = 1; row<= num; row++){
        let star = '';
            for(let col = 1; col<= row; col++)
                star +='*';
                console.log(star);
    }
}

