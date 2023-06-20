let fs = require('fs');
let input = fs.readFileSync('../t.txt').toString().split(' ');

if(input[0] === input[0].split('').reverse().join('')) {
    console.log(1)
} else {
    console.log(0)
}