//Template Literals
let hello = 'Hello';
let world = 'World'

//antes de ES6
let epicPhrase = hello + ' '+world + '!';
console.log(epicPhrase);

//Template Literals
let epicPhrase2 = `${hello} ${world}!`;
console.log(epicPhrase2);

//Multi-Line strings
let lorem = 'esto es un string \n' + 'esto es otra linea';
let lorem2 = `Esta es una frase epica
la continuación de esa frase epica`;

console.log(lorem);
console.log(lorem2);