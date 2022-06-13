// not comlete yet
let n = "abppiicpzidpixpigvl"
let a = 0
let b = 1
let newN = ''

while(n[a] && n[b]){
    if(n[a] === 'p' && n[b] === 'i' && n[a]+n[b] === 'pi'){
        newN += 3.14
    }else{
        newN += n[a]+n[b]
    }
    a +=2
    b +=2
}
if(n[b]===undefined && n[a] !== undefined){
    newN += n[a]
}
console.log(newN)