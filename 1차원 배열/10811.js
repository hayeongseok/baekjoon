let fs = require('fs');
let input = fs.readFileSync('../t.txt').toString().trim().split('\n');

let box = input[0].split(' ')[0]
let count = input[0].split(' ')[1]
let arr = [];

for(let i = 1; i <= box; i++) {
    arr.push(i)    
}

for(let j = 1; j <= count; j++) {
    start = Number(input[j].split(' ')[0])
    end = Number(input[j].split(' ')[1])
    
    let newArr = arr.slice(start-1, end)
    arr.splice(start-1, newArr.length, ...newArr.reverse())
}
console.log(arr)