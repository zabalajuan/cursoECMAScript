const user1 = {username: 'gndx', age: 34, country:'CO'};

const {username, ...values} = user1;

console.log(username);
console.log( values);
