

function sing(){
    console.log("happy birth day")
}

sing();

function add(){
    console.log(2+4)
}

add();

function plus(){
    return 2+5;
}

console.log(plus())
const returnval = plus();
console.log(returnval)


function sumoftwovar(x,y){
    return x+y;
}

console.log(sumoftwovar(8,9))

function firstChar(anyString){
    return anyString[3]
}
console.log(firstChar("abcd"))

// function
// input : array,number
// ginde number in array
// output : index of number if number is pressent in array

// [1,2,3,4,5,68,4,]

function findNumber(array,number){
    for(let i =0; i<array.length; i++){
        if(array[i]=== number){
            return i;
        }
    }
    return -1

}
const array = [1,2,3,4,5,68,4,]
const ans = findNumber(array,4)

console.log(ans)