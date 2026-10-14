
let value = "ABC"

let bufferValue = Buffer.from(value)

console.log(bufferValue)

let value2 = "123"

let bufferValue2 = Buffer.from(value2)

console.log(bufferValue2)

let combineBuffersValue = Buffer.concat([bufferValue,bufferValue2])

console.log(combineBuffersValue.toString())
