//Declarar Variable
var lastName = 'David';
//reasignar
lastName = 'Oscar';
console.log(lastName);

let fruit = 'Apple';
fruit = 'kiwi';
console.log(fruit);

const animal = 'Dog';
animal = 'cat';
console.log(animal);

// Arrow function
const fruits = () => {
    if(true){
        var fruit1 = 'Apple'; //function scope
        let fruit2 = 'Kiwi'; //block scope
        const fruit3 = 'Banana'; //block scope
    }
    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);

}

fruits();