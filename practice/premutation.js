let findPermutation = (string)=>{

    if(!string || typeof string !== "string"){
    
        return "please enter a string"
    
    } else if (string.length < 2){
    
        return string  // if string is "1"  it will return one only
    
    }

    let permutationArray = []

    for(let i=0; i<string.length; i++){

        let char = string[i]
        
        let remainingChars = string.slice(0,i) + string.slice(i+1,string.length)
        
        for( let permutation of findPermutation(remainingChars)){
        
            permutationArray.push(char + permutation)
            console.log(permutation)
        }

    }
    
    return permutationArray

}

let a = "abc"

console.log(findPermutation(a))
