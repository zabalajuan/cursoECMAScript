//enhanced object literals
// old

function newUser (user, age, country){
    return {
        user: user,
        age: age,
        country: country
    }
}

//ES6
function newUser (user, age, country, uID){
    return {
        user,
        age,
        country,
        id: uID
    }
}

console.log(newUser('gndx', 34, 'MX', 1 ));