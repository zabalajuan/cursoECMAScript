function square(num){
    return num * num;
}
// equivalente a la primera
const square2 = (num)=> {
    return num*num;
}
//equivalente a las dos anteriores
const square3 = num => num*num;

console.log(square(2));
console.log(square2(2));
console.log(square3(2));