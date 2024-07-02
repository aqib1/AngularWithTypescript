var greeting = 'this is a string';
function double(x) {
    return x * 2.5;
}
console.log(double(13.4));
function sayHello(message) {
    console.log(message);
}
// declare a function as lambda
var triple = function (x) { return x * 3; };
console.log(triple(5));
// declare a function as lambda and then assign
var declareTriple;
declareTriple = function (x) { return x * 3; };
console.log(declareTriple(3));
