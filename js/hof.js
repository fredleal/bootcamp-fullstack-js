function doubleVelocity(velocity, printer) {
    console.log("Entrei em doubleVelocity")
    let newVelocity = velocity * 2
    printer(newVelocity)
    return newVelocity
}

//Com arrow function
let anotherVelocity = doubleVelocity (50, velocity =>{
    console.log("Outra velocidade: " + velocity)
})

//Com função anonima
/*let anotherVelocity = doubleVelocity(50, function(velocity) {
    console.log("Outra velocidade: " + velocity)
})*/