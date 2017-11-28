const calc = require('./calc')

if(calc('0') !== 0) {
    console.log(calc('0'))
    throw Error("Literal parse")
}
if(calc('5') !== 5) throw Error("Literal parse")
if(calc('-5') !== -5) throw Error("Literal parse")

if(calc("1+1") !== 2) throw Error("Addition")