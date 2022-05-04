// filter method

const numbers = [1,3,2,5,6,4,6]

const isEven = (number)=>{
    return number %2===0;
}


const evenNumbers = numbers.filter(isEven);
console.log(evenNumbers)