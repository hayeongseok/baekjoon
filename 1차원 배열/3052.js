let fs = require('fs');
let input = fs.readFileSync('../t.txt').toString().trim().split('\n').map(Number);

let arr = [];

for (let i = 0; i < input.length; i++) {
    arr.push(input[i]%42)
}


arr = [...new Set(arr)]

console.log(arr)

console.log(arr.length)

/*
let fs = require('fs')
let input = fs.readFileSync('t.txt').toString().trim().split('\n')

input = input.map(el => Number(el))

input = input.map(el => el%42)

input = [...new Set(input)]

console.log(input.length)*/