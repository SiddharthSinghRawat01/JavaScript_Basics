const numbers = [3,4,5,10,8];

const square = function(number, index){
    console.log (number *number)
    return ` ${index} :${number * number}`; //alwas return for map 
}

const squarNumber = numbers.map(square)
console.log(squarNumber)