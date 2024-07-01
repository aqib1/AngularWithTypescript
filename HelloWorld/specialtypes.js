var isTrue = true;
// isTrue = "string" can not assign string to a boolean
// Math.round(isTrue) can not round a boolean
var isAny = true;
isAny = "any variable can be assigne to string";
Math.round(isAny); // any variable can be pass to round without 
// compilation error and it will return NaN
var w = 1;
w = "this is unknown";
console.log(w);
var newString = w.concat(" updating this"); // unkown type need to caste to get actual type
console.log(newString);
