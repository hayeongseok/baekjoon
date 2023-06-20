
let fs = require('fs');
let input = fs.readFileSync('../t.txt').toString().split('\r\n');

let arr1 = Array.from(Array(100), () => Array(100).fill(0))
let num = input[0]
let count = 0;

for(let i = 1; i <= num; i++) {
    let x = +input[i].split(' ')[0]
    let y = +input[i].split(' ')[1]

    for(let n = x; n < x + 10; n++) {
        for(let m = y; m < y + 10; m++) {
            if (arr1[n][m] === 0) {
                arr1[n][m] = 1
                count++
            }
        }
    }
}

console.log(count)


/*


let [TC, ...input] = require("fs")
  .readFileSync("../t.txt")
  .toString()
  .split("\n");
input = input.map((i) => i.split(" "));


const arr = Array.from(Array(100), () => Array(100).fill(0));
let count = 0;

for (let i = 0; i < TC; i++) {
  let startX = +input[i][0]; // 3
  let startY = +input[i][1]; // 7
  console.log(startX)
  console.log(startY)
  for (let l = 0; l < 10; l++) {
    for (let m = 0; m < 10; m++) {
      if (arr[startX + l][startY + m] !== 0) {
        continue;
      }
      if (arr[startX + l][startY + m] === 0) {
        arr[startX + l][startY + m] = 1;
        count++;
      }
    }
  }
}
console.log(count);

*/



