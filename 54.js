// call function

function myFunc2(){
    console.log("inside my function")
}

function myFunc(callback){
    console.log("hell i m inside my func")
    callback();
}

myFunc(myFunc2);