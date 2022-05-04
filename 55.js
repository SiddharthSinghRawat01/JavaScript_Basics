// function returing function

function myfunc(){
    function hello(){
        // console.log("hello ")
        return "hello world"
    }
    return hello
}

const ans = myfunc();
console.log(ans())