const name ="Prasad";
const repoCount = 50;

// console.log(name + repoCount);
//back ticks
// string interpolation
console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const gamename = new String("Prasad-s");

console.log(gamename[0]);
console.log(gamename.__proto__);

console.log(gamename.length);

console.log(gamename.toUpperCase());

console.log(gamename.charAt(0));

console.log(gamename.indexOf("a"));

const newString = gamename.substring(0, 6);
console.log(newString);

const anotherString = gamename.slice(-8,2);
console.log(anotherString);

const newString2 = "    Prasad    ";
console.log(newString2.trim());

const url = "https://prasad.com";
console.log(url.replace("https", "http"));

const url2 = "https://prasad.com/prasad";
console.log(url2.includes("prasad"));

const url3 = "https://prasad.com/prasad";
console.log(url3.split("/"));