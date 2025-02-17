"use strict";
//--------------------------------------------Shortest Word-----------------------------------------
// function findShort(s: string): number {
//   return Math.min(...s.split(" ").map((x) => x.length));
// }
// console.log(findShort("bitcoin take over the world maybe who knows perhaps"));
//------------------------------------------Credit Card Mask----------------------------------------
// function maskify(cc: string): string {
//   return cc.slice(0, -4).replace(/./g, "#") + cc.slice(-4);
// }
// console.log(maskify("4556364607935616"));
//---------------------------------Sum of two lowest positive integers------------------------------
// function sumTwoSmallestNumbers(numbers: number[]): number {
//   let total = numbers.sort((a, b) => a - b);
//   return total[0] + total[1];
// }
// console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77]));
//--------------------------------------------Sum of Numbers----------------------------------------
// function getSum(a: number, b: number): number {
//   return ((Math.abs(a - b) + 1) * (a + b)) / 2;
// }
// console.log(getSum(0, 2));
//--------------------------------------------Friend or Foe?----------------------------------------
// function friend(friends: string[]): string[] {
//   return friends.filter((x) => x.length === 4);
// }
// console.log(friend(["Ryan", "Kieran", "Mark"]));
//----------------------------------------------Two to One------------------------------------------
// function longest(s1: string, s2: string): string {
//   let con = `${s1.split(" ")}${s2.split(" ")}`.split("").sort();
//   return [...new Set(con)].join("");
// }
// console.log(longest("aretheyhere", "yestheyarehere"));
//-----------------------------------------Categorize New Member------------------------------------
// function openOrSenior(data: number[][]): string[] {
//   return data.map(([age, handicap]) =>
//     age > 54 && handicap > 7 ? "Senior" : "Open"
//   );
// }
// console.log(
//   openOrSenior([
//     [45, 12],
//     [55, 21],
//     [19, -2],
//     [104, 20],
//   ])
// );
//------------------------------------------String ends with?---------------------------------------
// function solution(str: string, ending: string): boolean {
//   return str.endsWith(ending);
// }
// console.log(solution("abc", "bc"));
//------------------------------------Find the next perfect square!---------------------------------
// function findNextSquare(sq: number): number {
//   let number = Math.sqrt(sq);
//   let number2 = Math.sqrt(sq) + 1;
//   return sq % number === 0 ? number2 * number2 : -1;
// }
// console.log(findNextSquare(100));
//---------------------------------------------Exes and Ohs-----------------------------------------
// function XO(str: string): boolean {
//   let x = str
//     .toLowerCase()
//     .split("")
//     .filter((f) => f === "x");
//   let o = str
//     .toLowerCase()
//     .split("")
//     .filter((f) => f === "o");
//   return o.length === x.length ? true : false;
// }
// console.log(XO("xo"));
//------------------------------------------Descending Order----------------------------------------
// function descendingOrder(n: number): number {
//   let divide = n.toString().split("").sort().reverse().join("");
//   return Number(divide);
// }
// console.log(descendingOrder(1201));
//-------------------------------------------List Filtering-----------------------------------------
// function filter_list(l: Array<any>): Array<number> {
//   return l.filter((f) => typeof f === "number");
// }
// console.log(filter_list([1,2,'a','b']));
//--------------------------------------Get the Middle Character------------------------------------
// function getMiddle(s: string): string{
//   let divide = s.length;
//   let calEven = divide / 2;
//   let calOdd = Math.floor(s.length / 2);
//   let even = s.split("")[calEven - 1] + s.split("")[calEven];
//   let odd = s.split("")[calOdd];
//   return divide === 0 ? '' : divide % 2 === 0 ? even : odd;
// }
// console.log(getMiddle('test'));
//------------------------------------------You're a square!----------------------------------------
// const isSquare = function (n: number): boolean {
//   let sq = Math.sqrt(n);
//   return sq % 1 != 0 ? false : true;
// };
// console.log(isSquare(4));
//----------------------------------------------Mumbling--------------------------------------------
// function accum(s:string) : string {
//   let uArr = s.toUpperCase().split("");
//   let arr = [];
//   let concat = []
//   for (let i = 0; i <= s.length - 1; i++) {
//     arr.push(s[i].repeat(i).toLowerCase());
//     concat[i] = uArr[i] + arr[i];
//   }
//   return concat.join("-");
// }
// console.log(accum('ZpglnRxqenU'));
//-----------------------------------------Complementary DNA----------------------------------------
// class Kata {
//   static dnaStrand(dna: string) : string {
//     return dna
//       .split("")
//       .map((x) =>
//         x === "A"
//           ? "T"
//           : x === "T"
//           ? "A"
//           : x === "G"
//           ? "C"
//           : x === "C"
//           ? "G"
//           : ""
//       )
//       .join("");
//   }
// }
// console.log(Kata.dnaStrand("AAAA"));
//-----------------------------------------Highest and Lowest---------------------------------------
// class Kata {
//   static highAndLow(numbers: string): string {
//     let numArray = numbers.split(" ").map((x) => Number(x));
//     let min = Math.min(...numArray);
//     let max = Math.max(...numArray);
//     return `${max} ${min}`;
//   }
// }
// console.log(Kata.highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));
//-----------------------------------------Square Every Digit---------------------------------------
// class Kata {
//   static squareDigits(num: number): number {
//     let divide = num.toString().split("").map(x => Number(x));
//     let sq = divide.map((x) => x ** 2);
//     return Number(sq.join(""));
//   }
// }
// console.log(Kata.squareDigits(9119));
//-----------------------------------------Disemvowel Trolls----------------------------------------
// class Kata {
//   static disemvowel(str: string): string {
//     let arr: string[] = [];
//     str
//       .split("")
//       .forEach((d) =>
//         d === "a" ||
//         d === "e" ||
//         d === "i" ||
//         d === "o" ||
//         d === "u" ||
//         d === "A" ||
//         d === "E" ||
//         d === "O" ||
//         d === "U" ||
//         d === "I"
//           ? ""
//           : arr.push(d)
//       );
//     return arr.join("");
//   }
// }
// console.log(Kata.disemvowel("This website is for losers LOL!"));
//---------------------------------------------Vowel Count--------------------------------------------
// class Kata {
//   static getCount(str: string): number {
//     let count = 0;
//     str
//       .split("")
//       .forEach((d) =>
//         d === "a" || d === "e" || d === "i" || d === "o" || d === "u"
//           ? count++
//           : ""
//       );
//     return count;
//   }
// }
// console.log(Kata.getCount("abracadabra"));
