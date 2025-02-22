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

//----------------------------------------------Array.diff-------------------------------------------

// function arrayDiff(a, b) {
//   return a.filter((e) => !b.includes(e));
// }

// console.log(arrayDiff([1, 2, 2, 2, 3, 3], [1, 3]));

//-------------------------------------------Find the odd int----------------------------------------

// function findOdd(arr) {
//   return arr.find((item, index) => arr.filter((el) => el == item).length % 2);
// }

// console.log(findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1]));

//--------------------------------------Sum of Digits / Digital Root----------------------------------

// function digitalRoot(n) {
//   total = n;
//   while (total >= 10) {
//     total = total
//       .toString()
//       .split("")
//       .map((x) => Number(x))
//       .reduce((acc, crv) => acc + crv, 0);
//   }
//   return total;
// }

// console.log(digitalRoot(12341));

/*OR Solution 2

function digitalRoot(n) {
  let total = n
    .toString()
    .split("")
    .map(Number)
    .reduce((acc, crv) => acc + crv, 0);

  return total < 10 ? total : digitalRoot(total);
}

console.log(sumDigitsUntilSingle(9876));
 */

//------------------------------------------Create Phone Number--------------------------------------

// function createPhoneNumber(numbers) {
//   return `(${numbers.slice(0, 3).join("")}) ${numbers
//     .slice(3, 6)
//     .join("")}-${numbers.slice(6, 9).join("")}`;
// }

// console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

//---------------------------------------------Bit Counting------------------------------------------

// function countBits(n) {
//   return n
//     .toString(2)
//     .split("")
//     .filter((x) => x === "1").length;
// }

// console.log(countBits(25));

//---------------------------------------Find The Parity Outlier-------------------------------------

// function findOutlier(integers) {
//   let odd = integers.filter((x) => x % 2 === 1 || x % 2 === -1);
//   let even = integers.filter((x) => x % 2 === 0 || x % 2 === -0);
//   return odd.length === 1 ? odd[0] : even[0];
// }

// console.log(findOutlier([-1,2,4]));

//-----------------------------------------Counting Duplicates---------------------------------------

// function duplicateCount(text) {
//   return (
//     text
//       .toLowerCase()
//       .split("")
//       .sort()
//       .join("")
//       .match(/([^])\1+/g) || []
//   ).length;
// }

// console.log(duplicateCount("aa"));
