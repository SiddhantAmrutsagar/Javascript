// string

const name = "Siddhant"
const repoCount = 50

console.log(`hello ${name.to}, your got ${repoCount} marks.`);

const gameName = new String("siddhant-FC-com")
console.log(gameName[0]);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const str = "   sid   "
console.log(str);

console.log(str.trim());

const url = "https://siddhant.com/sid%20amrutsagar"

console.log(url.replace('%20', '-'));

console.log(url.includes('sid'));

console.log(gameName.split("-"));
