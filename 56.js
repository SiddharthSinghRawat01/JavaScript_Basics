// important array method

//forEach
//map
//fileter
//reduce

const numbers = [4,5,8,9];

function multiplyBY2(number,index){
    console.log("index",index);
    console.log(`${number}*2 =${number*2} `)
}

// multiplyBY2(numbers[0],0)

numbers.forEach(multiplyBY2)