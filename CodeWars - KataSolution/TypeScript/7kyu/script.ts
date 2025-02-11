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