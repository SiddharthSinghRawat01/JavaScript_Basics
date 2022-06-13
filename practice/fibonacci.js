let n1 = 0
let n2 = 1
let sum;
console.log(n1);
console.log(n2);
for (let i = 0; i < 10; i++) {
    
    sum = n1 + n2;
    n1 = n2
    n2 = sum
    console.log(sum)
}