
// condintion shoud always fail in while loop to exit the loop

let n = 422
t = n
count = 0

while (n!=0) {
   let r = n % 10
   if(t % r === 0){
       count +=1
   }
n = Math.floor(n/10)
}

console.log(count)