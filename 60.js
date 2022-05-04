// sort

// let a = [1,5,3,1,8,9,5]
// let c = ['sid','abc','Sam','xmas']
// let b = c.sort()

// console.log(b)

// const numbers = [5,9,410,3000]
// numbers.sort();
// console.log(numbers)

// const numbers = [5,9,410,3000]
// numbers.sort((a,b)=> a-b);
// console.log(numbers)

const porducts = [
    {porductId: 1,productName: "p1",price: 300},
    {porductId: 2,productName: "p2",price: 30},
    {porductId: 3,productName: "p3",price: 13000},
    {porductId: 4,productName: "p4",price: 3000},
]

let loeToHIgh = porducts.slice(0).sort((a,b)=>{
    return a.price - b.price
})

console.log(loeToHIgh);