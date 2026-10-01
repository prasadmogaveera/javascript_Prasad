//array

// const myArr = [0, 1, 2, 3, 4, 5, "Prasad"];

// console.log(myArr[0]);

// const myHeros=["Ironman", "Spiderman", "Thor", "Hulk", "Captain America"];

// console.log(myHeros[0]);

const myArr2 = new Array(1, 2, 3, 4, 5, "Prasad");

console.log(myArr2[0]);

//Methods of array

myArr2.push("Amma");
console.log(myArr2);

myArr2.pop();
console.log(myArr2);

myArr2.unshift(9);
console.log(myArr2);

myArr2.shift();
console.log(myArr2);

console.log(myArr2.includes(9));
console.log(myArr2.indexOf(5));

const newArr = myArr2.join();
console.log(newArr);
console.log(typeof newArr);

//slice and splice

console.log("A",myArr2);
const mynewArr = myArr2.slice(1, 3);
console.log(mynewArr);
console.log("B",myArr2);

console.log("B",myArr2);
const mynwArr = myArr2.splice(1, 3);
console.log(mynwArr);
console.log("C",myArr2);

