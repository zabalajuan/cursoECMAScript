const hello = '      Hello World!     ';
console.log(hello.trimStart());
//Hello World!     
console.log(hello.trimEnd());
//      Hello World!
let hello2 = hello.trimStart();
console.log(hello2.trimEnd());
//Hello World!
console.log(hello.trimEnd().trimStart());
//Hello World!