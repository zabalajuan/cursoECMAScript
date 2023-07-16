// arrays destructuring

let fruits = [ 'apple', 'banana'];
let [a, b] = fruits;
console.log(a,b);
console.log(a, fruits[1]);

//objects destructuring

let user = { username: 'Oscar', age:34 };
let {username, age} = user;
console.log(username, age); //ES6
console.log(username, user.age);

//spread operator

let person = { name: 'oscar', age:25};
let country = 'MX';


//...person > hace la destructuracion del objeto
let data = { ...person, country};
console.log(data);
let data2 = { id:1, ...person, country};
console.log(data2);

// rest
function sum(num, ...values){
    console.log(values);
    console.log(num + values[0]);
    return num + values[0];
}

sum(1, 1, 2, 3);
