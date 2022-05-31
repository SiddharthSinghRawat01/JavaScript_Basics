
// let n = 5
// let s;
// let t;
function test(n,s){
for(let i = 0; i<n; i++){
    for(let j = 0; j < n -i ; j++){
        s = s + " "
    }
    for(let k = 0; k< i; k++){
        s = s +"^" 
    }
    for(let k = 0; k< i -1; k++){
        s = s +"^" 
    }
    s = s+"\n"
}
for(let i = 0; i<n; i++){
    for(let j = 0; j < i ; j++){
        s += " "
    }
    for(let k = 0; k< n-i; k++){
        s += "^" 
    }
    for(let k = 0; k< n-i -1; k++){
        s += "^" 
    }
    s += "\n"
}

return s
}

console.log(test(5));