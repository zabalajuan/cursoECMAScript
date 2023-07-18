const anotherNumber = 1;
const validate = anotherNumber ?? 5;
console.log(validate);
// 1
const anotherNumber2 = null;
const validate2 = anotherNumber2 ?? 5;
console.log(validate2);
// 5

//comprueba si es nulo y si no le asigna el valor definido