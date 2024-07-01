var message = "This is first typescript project";
// console.log(message)
var inferredType = 55;
// console.log(inferredType)
inferredType += 5;
// console.log(inferredType)
var anyType = 23;
console.log(anyType);
anyType = "This is any type";
console.log(anyType);
var round = Math.round(anyType);
console.log(round); // this will be NaN
