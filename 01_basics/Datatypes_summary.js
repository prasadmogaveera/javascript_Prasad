// Primitive data types
//7 types
//string, number, bigint, boolean, undefined, symbol, null

const score=100;
const scoreValue=100.1;
const isLoggedIn=false;
const userEmail=undefined;
const userSymbol=Symbol('user');
const anotherUserSymbol=Symbol('user');
const userNull=null;

console.log(userSymbol===anotherUserSymbol);
console.log(typeof userNull);
// Reference data types/Non primitives
//object, array, function

const heros = ['shaktiman', 'naagraj', 'doga'];
let myObj = {
    name: 'shaktiman',
    power: 'flying'
}

const myFunction = function(){
    console.log('hello world');
}

console.log(typeof myObj);