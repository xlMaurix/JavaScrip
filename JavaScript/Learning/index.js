//My first shitty code
console.log('Are you supposed to be here?');

//Create variables
let test = 'First'; 
let test2 = 'Second';
console.log('This is the ' + test + ' test.');
console.log('This is the ' + test2 + ' test.');

//CONST doesn't allow the variable to change anymore
const uno = 'Const';
console.log(uno);

let age = 10;
let isApproved = true;

if (isApproved = true){
    console.log('This is ' + isApproved + ' and I have ' + age + ' years old lol');  
};

//null = undefinied

//There is a method to add more than 1 object to a same variable
let person = {
    name: 'Caca',
    age: 1
};

console.log(person);

//Dot notation
person.name = ('O');

//Arrays
let selectedColors = ['orange','yellow'];

console.log(selectedColors);
console.log(selectedColors[0]); //The 0 represents orange
console.log(selectedColors[1]); //The 1 represents yellow

//We can add more items to the array, doesn't matter if it is not mentioned
selectedColors[2] = 'Agregue esto!!!!';

console.log(selectedColors);

//We can use .lenght to see how many items are in a array

console.log('This is the size of selectedColors ' + selectedColors.length)

//FUNCTIONS EXITS!!!!!!!!!!!!!!!!!!!

function testlike(name, lastname) {
    console.log('Hello ' + name + ' ' + lastname);
}

testlike('Chris', 'Velez'); 

//boring math

function square(number) {
    return number * number;
}

console.log(square(56));
