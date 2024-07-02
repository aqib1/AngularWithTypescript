let greeting: string = 'this is a string';

function double(x: number): number {
    return x * 2.5;
}

console.log(double(13.4));

function sayHello(message: string): void {
    console.log(message);
}

// declare a function as lambda
const triple = (x: number) => x * 3;

console.log(triple(5))

// declare a function as lambda and then assign
let declareTriple: (x: number) => number;
declareTriple = (x: number) => x * 3;

console.log(declareTriple(3))