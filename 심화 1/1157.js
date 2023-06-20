let fs = require('fs');
let input = fs.readFileSync('../t.txt').toString().trim().split(' ');
let arr = input[0].toLowerCase().split('')

const result = {};
arr.forEach((x) => { 
  result[x] = (result[x] || 0)+1; 
});

let keys = Object.keys(result)
let values = Object.values(result)

let test = keys.filter((key) => result[key] === Math.max(...values));

if(test.length > 1) {
    console.log('?')
} else {
    console.log(test[0].toUpperCase())
}



