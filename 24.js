// break and continue key word

for(let i =1; i<=10; i++){
    if(i===4){
        break;
    }
    console.log(i);
}

// n0. 4 is not in the loop
for(let i =1; i<=10; i++){
    if(i<=4){
        continue;
    }
    console.log(i);
}