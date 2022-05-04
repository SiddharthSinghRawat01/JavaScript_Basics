// array destructuring

// for loop in arry

let chars =["a","b","c","d"]

// let char1 = chars[0];
// let char2 = chars[1];
// console.log(char1)
// console.log(char2)

// we can do arr descture

// let [char1, char2] = chars;
// console.log(char1)
// console.log(char2)
// output a,b

// let [char1, ,char2] = chars;
// console.log(char1)
// console.log(char2)
// output: a,c

// let myNewchars = chars.slice(2);
// console.log(myNewchars)
// (2) ['c', 'd']

let [char1,char2,... myNewchars] = chars;
console.log(myNewchars)

