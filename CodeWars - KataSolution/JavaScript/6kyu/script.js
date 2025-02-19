//------------------------------------------Multiples of 3 or 5-------------------------------------

// function solution(number) {
//   let uniq = new Set();

//   if (number < 0) {
//     return 0;
//   }

//   for (let i = 0; i < number; i++) {
//     if (i % 3 === 0 || i % 5 === 0) {
//       uniq.add(i);
//     }
//   }
//   return Array.from(uniq).reduce((acc, crv) => acc + crv, 0);
// }

// console.log(solution(15));

//---------------------------------------Stop gninnipS My sdroW!-----------------------------------

// function spinWords(string) {
//   return string
//     .split(" ")
//     .map((x) => (x.length >= 5 ? x.split("").reverse().join("") : x))
//     .join(" ");
// }

// console.log(spinWords("This is a testxx"));
