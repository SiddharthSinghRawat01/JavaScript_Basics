// sets(it is iterable)
// store data
// sets also have its own mwthod
// no index based access
// order is not guranteed
// unique items only (no duplicates are alloweded)

// const numbers = new Set([1,2,2,3,4,4]);
// console.log(numbers)

// const numbers = new Set();
// numbers.add(1)
// numbers.add(2)
// numbers.add(3)
// numbers.add([1,2,3,4,5])
// numbers.add([1,2,3,4,5])// do arry lho skte hai inke address alag alag hote hai
// console.log(numbers)

//hoe to chek if no.is in set

// const numbers = new Set();
// numbers.add(1)
// numbers.add(2)
// numbers.add(3)
// numbers.add([1,2,3,4,5])
// numbers.add([1,2,3,4,5])// do arry lho skte hai inke address alag alag hote hai
// console.log(numbers)

const numbers = new Set();
numbers.add(1)
numbers.add(2)
numbers.add(3)
numbers.add([1,2,3,4,5])
numbers.add([1,2,3,4,5])// do arry lho skte hai inke address alag alag hote hai
console.log(numbers.has(1))

if(numbers.has(1)){
    console.log("present")
}

for(let number of numbers){
    console.log(number)
}