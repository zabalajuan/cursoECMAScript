//old way
function newUser(name, age, country){
    var name = name || 'Oscar';
    var age = age || 33;
    var country = country || 'Colombia';
    console.log(name, age,country);
}

newUser();
newUser('David', 15, 'MX')

//after ES6
function newAdmin (name = 'Oscar', age = 33, country = 'CL'){
    console.log(name,age,country);
}

newAdmin();
newAdmin('David', 15, 'MX')