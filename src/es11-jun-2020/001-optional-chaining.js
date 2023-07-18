const users = {
    gndx: {
        country: 'MX'
    },
    ana: {
        country: 'CO'
    }
}

console.log(users.gndx.country)
// MX
//console.log(users.gndx.age)
// undefined

//new
//console.log(users.bebeloper.country)
//errorrrrrrrrrrr
console.log(users?.bebeloper?.country)
//undefined