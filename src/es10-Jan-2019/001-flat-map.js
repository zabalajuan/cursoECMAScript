//retorna una matriz de cualquier submatriz

//flat
const array = [ 1, 2, 4,5, 2, [1,3,5,6,[1,2,4]]];
console.log(array);
console.log(array.flat(3));
/* [
    1, 2, 4, 5, 2,
    1, 3, 5, 6, 1,
    2, 4
  ]
   */
//flatmap

const array2 = [1,2,3,4,5];
console.log(array2.flatMap(v => [v, v*2]));

/* [
    1, 2, 2, 4,  3,
    6, 4, 8, 5, 10
  ] */
console.log(array2.flatMap(v => [v, v+1, v*2]));