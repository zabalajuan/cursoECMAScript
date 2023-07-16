//Declarando la clase
class User {};
//Creando una instancia d ela clase
const newUser = new User();

//declaracion
class User2 {
    //methods
    greeting(){
        return 'Hello';
    }
};

const gndx = new User2();
console.log(gndx.greeting());
const developer = new User2();
console.log(developer.greeting());

//constructor

class User3 {
    //constructor
    constructor(){
        console.log('Nuevo usuario');
    }
    //methods
    greeting(){
        return 'Hello!!!';
    }
}

const david = new User3();

//this  Hace referencia al elemento padre que lo contiene
class User4 {
    //constructor
    constructor(name){
        console.log('Nuevo usuario 4');
        this.name = name;
    }
    //methods
    speak(){
        return 'Hello!!!';
    }
    greeting(){
        return `${this.speak()} ${this.name}`;
    }
}

const ana = new User4('Ana');
console.log(ana.greeting());

// setters and getters
class User5 {
    //constructor
    constructor(name, age){
        console.log('Nuevo usuario 5');
        this.name = name;
        this.age = age;
    }
    //methods
    speak(){
        return 'Hello!!!';
    }
    greeting(){
        return `${this.speak()} ${this.name}`;
    }

    get uAge(){
        return this.age;
    }
    set uAge(n) {
        this.age = n;
    }
}

const bebeloper = new User5 ('Pedro', 25);
console.log(bebeloper.uAge);
console.log(bebeloper.uAge = 20);
// console.log(bebeloper.uAge(27)); // no funciona porque uAGe no es una funcion