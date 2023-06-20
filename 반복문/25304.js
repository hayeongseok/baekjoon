let fs = require('fs');
let input = fs.readFileSync('../t.txt').toString().split('\n');

let totalPrice = Number(input[0]);
let totalCount = Number(input[1]);
let result = 0;

for(let i = 2; i <= totalCount + 1; i++) {
    let price = input[i].split(' ')[0]
    let count = input[i].split(' ')[1]
    
    result += price * count 
}

if(result == totalPrice) {
    console.log('Yes')
} else {
    console.log('No')
}