let fs = require('fs');
let input = Number(fs.readFileSync('../t.txt').toString())

for(let i = 1; i <= input; i++) {
    console.log('*'.repeat(i))
}

