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

//---------------------------------------Stop gninnipS My sdroW!------------------------------------

// function spinWords(string) {
//   return string
//     .split(" ")
//     .map((x) => (x.length >= 5 ? x.split("").reverse().join("") : x))
//     .join(" ");
// }

// console.log(spinWords("This is a testxx"));

//--------------------------------------------Who likes it?-----------------------------------------

// function likes(names) {
//   return names.length === 1
//     ? `${names[0]} likes this`
//     : names.length === 2
//     ? `${names[0]} and ${names[1]} like this`
//     : names.length === 3
//     ? `${names[0]}, ${names[1]} and ${names[2]} like this`
//     : names.length >= 4
//     ? `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
//     : "no one likes this";
// }

// console.log(
//   likes(["Jacob", "Alex", "Ale", "alis", "Jacob", "Alex", "Ale", "alis"])
// );