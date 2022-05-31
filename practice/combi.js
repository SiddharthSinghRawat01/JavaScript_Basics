let array = [1,2,3,4];
let results = [];

// Since you only want pairs, there's no reason
// to iterate over the last element directly
for (let i = 0; i < array.length - 1; i++) {
  // This is where you'll capture that last value
  for (let j = i + 1; j < array.length; j++) {
    results.push(`${array[i]} ${array[j]}`);
  }
}

console.log(results);
