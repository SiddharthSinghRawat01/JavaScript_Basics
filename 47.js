// hoisting

// function decleration
hello();

function hello(){
    console.log("hello world");
}

// youu can't do it in case of function expression
hi();


let hi = function (){
    console.log("hello hi");
}
