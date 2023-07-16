const regexEjemplo = /(\d{4})-(\d{2})-(\d{2})/;
const matchers = regexEjemplo.exec('2023-01-25');
console.table(matchers);
console.log('-------');
console.log(matchers);