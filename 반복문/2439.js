let fs = require('fs');
let n = Number(fs.readFileSync('../t.txt').toString())

for(let i = 1; i <= n; i++) {
    console.log(' '.repeat(n-i) + '*'.repeat(i))
}

