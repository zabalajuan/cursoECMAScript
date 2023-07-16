const stringPrueba = 'Hello';

console.log(stringPrueba.padStart(7,'hi'))
//hiHello
console.log(stringPrueba.padStart(5,'hi'))
//Hello
console.log(stringPrueba.padStart(8,'hi'))
//hihHello
console.log(stringPrueba.padStart(9,'hi'))
//hihiHello
console.log(stringPrueba.padStart(6,'_'))
//_Hello
console.log(stringPrueba.padEnd(6,'_'))
//Hello_