// function insie function

const app = ()=>{
    const myfunc = ()=>{
        console.log('hello myfunc')
    }

    const add = (a,b)=>{
        return a+b;
    }
    const mul = (a,b)=> a*b;
    

    console.log('inside app')
    myfunc();
    console.log(add(2,3))
}

app()