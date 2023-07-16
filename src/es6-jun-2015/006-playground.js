function solution(json1 = {name : 'Mr. Michi', food : 'Pescado'}, json2 = {age:12, color:'Blanco'}) {
    // Tu código aquí 👈
    //let person = {name = 'Mr. Michi', food = 'Pescado',age=12, color='Blanco'};

    let person = {...json1,...json2};
    console.log(person);
    return person;
}
solution({
    name: "Bigotes",
    food: "Pollito"
});