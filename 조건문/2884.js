
let fs = require('fs');

let input = fs.readFileSync('예제.txt').toString().split(' ');

let h = Number(input[0])

let m = Number(input[1])

if(m - 45 < 0) {

    m = 60 + (m - 45)

    h = h - 1

    if(h < 0) {

        h = 23

    }

    console.log(h, m)

} else {
    m = m - 45
    console.log(h, m)

}
