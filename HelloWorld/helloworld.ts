let message: string = "This is first typescript project"
// console.log(message)

let inferredType =  55
// console.log(inferredType)

inferredType += 5

// console.log(inferredType)

let anyType: any = 23
console.log(anyType)
anyType = "This is any type"
console.log(anyType)
var round = Math.round(anyType)
console.log(round) // this will be NaN

