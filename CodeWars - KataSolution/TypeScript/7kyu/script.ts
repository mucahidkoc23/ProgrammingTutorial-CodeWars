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
