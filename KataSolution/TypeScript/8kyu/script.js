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
// console.log(findN(['reg','needle','rebri',3,undefined]));
//--------------------------------------Is n divisible by x and y?----------------------------------
// function isDivisible(n: number, x: number, y: number): boolean {
//   return n % x === 0 && n % y === 0 ? true : false;
// }
// console.log(isDivisible(12, 2, 5));
