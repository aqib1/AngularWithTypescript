let isTrue = true
// isTrue = "string" can not assign string to a boolean
// Math.round(isTrue) can not round a boolean

let isAny: any = true
isAny = "any variable can be assigne to string"
Math.round(isAny) // any variable can be pass to round without 
// compilation error and it will return NaN

let w: unknown = 1;
w = "this is unknown"
console.log(w); 
let newString = (w as string).concat(" updating this") // unkown type need to caste to get actual type
console.log(newString);

// Never data type
// function infiniteLoop(): never {
//     while(true) {

//     }
// }

// let loopThatNeverEnds: never = infiniteLoop()

let y: undefined = undefined
let z: null = null
