let fs = require('fs');
let input = fs.readFileSync('../t.txt').toString().trim().split(' ');
// let arr = [1,1,2,2,2,8]
let result = []

// for(let i = 0; i < input.length; i++) {
//     console.log(arr[i] < input[i])
//     if(arr[i] < input[i]) {
//         result.push(-(input[i] - arr[i]))
//     } else {
//         result.push(arr[i] - input[i])
//     }
// }

// console.log(result.join(' '))

console.log(1 - input[0], 1 - input[1], 2 - input[2], 2 - input[3], 2 - input[4], 8 - input[5])
