// lexical scope

function myapp(){
const myvar = "value1"
function myfun(){
    const myvar = "value59j"
    console.log("inside my fun"+ myvar)
}
const myfun2 = function(){}
const myfun3 = ()=>{}

console.log(myvar)
myfun();


}

myapp();