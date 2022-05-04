// reduce

const numbers =[1,2,3,4,5]

// aim: sum of all no.in array

const sum = numbers.reduce((accumulator,currentValue)=>{
    return accumulator + currentValue
},100)

console.log(sum)

// accumulator,currentValue,return
// 1            2           3
// 3            3           6
// 6            4           10
// 10           5           15

const userCart = [
    {porduct:1,productName: "laptop",price: 50000},
    {porduct:1,productName: "moile",price: 6000},
    {porduct:1,productName: "cover",price: 500}
]

const total = userCart.reduce((totalPrice,currentPrice)=>{
    return  totalPrice + currentPrice.price;
},0)

console.log(total)