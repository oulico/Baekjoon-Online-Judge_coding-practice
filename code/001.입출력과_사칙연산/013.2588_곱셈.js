/*
문제
(세 자리 수) × (세 자리 수)는 다음과 같은 과정을 통하여 이루어진다.



(1)과 (2)위치에 들어갈 세 자리 자연수가 주어질 때 (3), (4), (5), (6)위치에 들어갈 값을 구하는 프로그램을 작성하시오.

입력
첫째 줄에 (1)의 위치에 들어갈 세 자리 자연수가, 둘째 줄에 (2)의 위치에 들어갈 세자리 자연수가 주어진다.

출력
첫째 줄부터 넷째 줄까지 차례대로 (3), (4), (5), (6)에 들어갈 값을 출력한다.
 */

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf8").split(`\n`);

const a = parseInt(input[0]);
const b = parseInt(input[1]);

const bString = input[1];
const bNumber1 = bString.split("")[2];
const bNumber2 = bString.split("")[1];
const bNumber3 = bString.split("")[0];

const answer3 = a * bNumber1;
const answer4 = a * bNumber2;
const answer5 = a * bNumber3;
const answer6 = a * b;

console.log(answer3);
console.log(answer4);
console.log(answer5);
console.log(answer6);
