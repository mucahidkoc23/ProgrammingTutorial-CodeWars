"use strict";
//----------------------------------------------Even or Odd------------------------------------------
// function evenOrOdd(n: number): string {
//   return n % 2 === 0 ? "Even" : "Odd";
// }
// console.log(evenOrOdd(4));
//-----------------------------------------------Multiply--------------------------------------------
// function multiply(a: number, b: number): number {
//   return a * b;
// }
// console.log(multiply(1, 1));
//--------------------------------------------Return Negative----------------------------------------
// function makeNegative(a: number): number {
//   return a < 0 ? a : -a;
// }
// console.log(makeNegative(-5));
//--------------------------------------------Sum of positive----------------------------------------
// function positiveSum(arr: number[]): number {
//   let arrP = arr.filter((x) => x > 0);
//   return arrP.reduce((acc, crv) => acc + crv, 0);
// }
// console.log(positiveSum([5, -5, 1, 7]));
//--------------------------------------------Reversed Strings---------------------------------------
// function solution(a: string): string {
//   return a.split('').reverse().join('');
// }
// console.log(solution("Mücahid"));
//--------------------------------------Convert a Number to a String!--------------------------------
// function numberToString(a: number): string {
//   return a.toString();
// }
// console.log(numberToString(123));
//-------------------------Convert boolean values to strings 'Yes' or 'No'.--------------------------
// function boolToWord(a: boolean): string {
//   return a === true ? 'Yes' : 'No';
// }
// console.log(boolToWord(true));
//---------------------------------------------Square(n) Sum-----------------------------------------
// function squareSum(numbers: number[]): number {
//   return numbers.map((x) => x ** 2).reduce((acc, crv) => acc + crv, 0);
// }
// console.log(squareSum([1, 2, 2]));
//--------------------------------------------Opposite number----------------------------------------
// function opposite(a: number): number {
//   return a < 0 ? -a : -a;
// }
// console.log(opposite(5));
//------------------------------------Remove First and Last Character--------------------------------
// function removeChar(a: string): string {
//   return a.slice(1, -1);
// }
// console.log(removeChar("Mücahid"));
//---------------------------------------------String Repeat-----------------------------------------
// function srtRepeat(n:number, str: string): string {
//   return str.repeat(n);
// }
// console.log(srtRepeat(3, 'selim'));
//----------------------------------------Grasshopper - Summation------------------------------------
// function summation(n: number): number {
//   let total = 0;
//   for (let i = n; i >= 1; i--) {
//     total += i;
//   }
//   return total;
// }
// console.log(summation(8));
//--------------------------------Find the smallest integer in the array-----------------------------
// function smallest(n: number[]): number {
//   return Math.min(...n);
// }
// console.log(smallest([1, 2, 3]));
//------------------------------------------Remove String Spaces-------------------------------------
// function trim(str: string): string {
//   return str.split(' ').join('');
// }
// console.log(trim(" 8 j 8 "));
//-------------------------------------Basic Mathematical Operations---------------------------------
// function basic(o:string, n1: number, n2: number) : number {
//   return eval(n1 + o + n2 );
// }
// console.log(basic("+", 5,3));
//---------------------------------------Abbreviate a Two Word Name----------------------------------
// function firstSecond(f: string): string {
//   let divide = f.split(" ");
//   return divide[0].toLocaleUpperCase().slice(0, 1) + "." + divide[1].toLocaleUpperCase().slice(0, 1) + ".";
// }
// console.log(firstSecond("Mücahid kOÇ"));
/*OR Solution 2

function firstSecond(name: string): string {
  return name.split(" ").map((item)=> item[0].toUpperCase()).join('.')
}

console.log(firstSecond("Mücahid KOÇ"));

*/
//-------------------------------------------Century From Year---------------------------------------
// function calc(n: number): number {
//   return Math.ceil(n / 100);
// }
// console.log(calc(1991));
//--------------------------------------------Keep Hydrated!----------------------------------------
// function calcH(n: number): number {
//   return Math.trunc(n * 0.5);
// }
// console.log(calcH(11.8));
//---------------------------------------A Needle in the Haystack-----------------------------------
// function findN(str: any[]): string {
//   let find = str.findIndex(x => x === 'needle').toString()
//   return Number(find) < 0 ? 'Your function didn\'t return anything' : `found the needle at position ${find}`;
// }
// console.log(findN(['reg', 'needle', 'rebri', 3, undefined]));
//--------------------------------------Is n divisible by x and y?----------------------------------
// function isDivisible(n: number, x: number, y: number): boolean {
//   return n % x === 0 && n % y === 0 ? true : false;
// }
// console.log(isDivisible(12, 2, 5));
//----------------------------------------Are You Playing Banjo?------------------------------------
// function areYouPlayingBanjo(str: string): string {
//   return str[0].toLowerCase() === 'r'
//     ? `${str} plays banjo`
//     : `${str} does not play banjo`;
// }
// console.log(areYouPlayingBanjo("RAdam"));
//---------------------------------------How good are you really?-----------------------------------
// function avarege(classPoints: number[], yourPoints: number): boolean {
//   return classPoints.reduce((acc, crv) => acc + crv, 0) / classPoints.length >
//     yourPoints
//     ? false
//     : true;
// }
// console.log(avarege([10, 20, 30], 20));
//-------------------------------------------Calculate average---------------------------------------
// function avaregeArray(avarage: number[]): number {
//   return avarage.length > 0 ? avarage.reduce((acc, crv) => acc + crv, 0) / avarage.length : 0;
// }
// console.log(avaregeArray([]));
//----------------------------------Count of positives / sum of negative------------------------------
// function countArray(array: number[] | null): number[] {
//   if (array === null) return [];
//   let arr1 = array.filter(x => x < 0).reduce((arr, crv) => arr + crv, 0);
//   let arr2 = array.filter(x => x > 0).length;
//   return array.length === 0 ? [] : [arr2, arr1] ;
// }
// console.log(countArray(null));
//-----------------------------------------------Fake Binary-------------------------------------------
// function fakeBinary(str: string): string {
//   return str.split("").map(x => Number(x)).map((x) => (x < 5 ? x * 0 : x / x)).join('')
// }
// console.log(fakeBinary("345678912345"));
//-------------------------------------------DNA to RNA Conversion--------------------------------------
// function replace(str: string): string {
//   return str.replaceAll('T','U')
// }
// console.log(replace("UTTT"));
//-------------------------------------------Rock Paper Scissors!---------------------------------------
// function RPS(str1: string, str2: string): string {
//   const rules: Record<string, string> = {
//     scissors: "paper",
//     rock: "scissors",
//     paper: "rock",
//   };
//   return rules[str1] === str2
//     ? "Player 1 won!"
//     : str1 === str2
//     ? "Draw"
//     : "Player 2 won!";
// }
// console.log(RPS("rock", "rock"));
//------------------------------------------Total amount of points---------------------------------------
// function total(str: string[]): number {
//   let total = 0;
//   for (let i = 0; i < str.length; i++) {
//     let a = str[i].split(":")[0];
//     let b =str[i].split(":")[1];
//     if (a > b) total += 3;
//     if (a === b) total += 1;
//     if (a < b) total + 0;
//   }
//   return total;
// }
// console.log(total(["3:1", "1:1", "2:1","1:2"]));
/*OR Solutıon 2

function total(games: string[]): number {
  return games.reduce(
    (acc, crv) => acc + Number(crv[0] > crv[2] ? 3 : crv[0] === crv[2] ? 1 : 0),
    0
  );
}

console.log(total(["3:1", "1:1", "2:1", "1:2"]));

 */
//---------------------------------------------Switch it Up!-------------------------------------------
// function switchItUp(number: number): string {
//   let object: Record<number, string> = {
//     0: "Zero",
//     1: "One",
//     2: "Two",
//     3: "Three",
//     4: "Four",
//     5: "Five",
//     6: "Six",
//     7: "Seven",
//     8: "Eight",
//     9: "Nine"
//   };
//   return object[number];
// }
// console.log(switchItUp(1));
//----------------------------------------------Double Char--------------------------------------------
// function doubleChar(str: string): string {
//   return str.split('').map(x => x.repeat(2)).join('')
// }
// console.log(doubleChar("AAaabb"));
