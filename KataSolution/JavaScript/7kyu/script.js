//----------------------------------------Jaden Casing Strings-------------------------------------

// function toJadenCase(str) {
//   return str.split(" ")
//     .map((c) => c.charAt(0).toUpperCase() + c.slice(1).toLowerCase())
//     .join(" ");
// }

// console.log(toJadenCase("most trees are blue"));

//----------------------------------------------Mumbling--------------------------------------------

// function accum(s) {
//   let uArr = s.toUpperCase().split("");
//   let arr = [];
//   let concat = [];
//   for (let i = 0; i <= s.length - 1; i++) {
//     arr.push(s[i].repeat(i).toLowerCase());
//     concat[i] = uArr[i] + arr[i];
//   }

//   return concat.join("-");
// }

// console.log(accum("ZpglnRxqenU"));

//-------------------------------------------You're a square!---------------------------------------

// function isSquare(n) {
//   let sq = Math.sqrt(n);
//   return sq % 1 != 0 ? false : true;
// }

// console.log(isSquare(-1));

//---------------------------------------Get the Middle Character-----------------------------------

// function getMiddle(s) {
//   let divide = s.length;
//   let calEven = divide / 2;
//   let calOdd = Math.floor(s.length / 2);
//   let even = s.split("")[calEven - 1] + s.split("")[calEven];
//   let odd = s.split("")[calOdd];
//   return divide % 2 === 0 ? even : odd;
// }

// console.log(getMiddle('test'));

//--------------------------------------------List Filtering---------------------------------------

// function filter_list(l) {
//   return l.filter((f) => typeof f === "number");
// }

// console.log(filter_list([1, 2, "a", "b"]));

//------------------------------------------Descending Order----------------------------------------

// function descendingOrder(n) {
//   let divide = n
//     .toString()
//     .split("")
//     .sort((a, b) => b - a)
//     .join("");
//   return Number(divide);
// }

// console.log(descendingOrder(1234));

//------------------------------------------Highest and Lowest--------------------------------------

// function highAndLow(numbers) {
//   let numArray = numbers.split(" ");
//   let min = Math.min(...numArray);
//   let max = Math.max(...numArray);
//   return `${max} ${min}`;
// }

// console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));

//-----------------------------------------Square Every Digit---------------------------------------

// function squareDigits(num) {
//   let divide = num.toString().split("");
//   let sq = divide.map((x) => x ** 2);
//   return Number(sq.join(""));
// }

// console.log(squareDigits(3212));

//------------------------------------------Disemvowel Trolls---------------------------------------

// function disemvowel(str) {
//   let arr = [];
//   str
//     .split("")
//     .forEach((d) =>
//       d === "a" ||
//       d === "e" ||
//       d === "i" ||
//       d === "o" ||
//       d === "u" ||
//       d === "A" ||
//       d === "E" ||
//       d === "O" ||
//       d === "U" ||
//       d === "I"
//         ? ""
//         : arr.push(d)
//     );
//   return arr.join("");
// }

// console.log(disemvowel("This website is for losers LOL!"));

//---------------------------------------------Vowel Count------------------------------------------

// function getCount(str) {
//   let count = 0;
//   str
//     .split("")
//     .forEach((d) =>
//       d === "a" || d === "e" || d === "i" || d === "o" || d === "u"
//         ? count++
//         : ""
//     );
//   return count;
// }

// console.log(getCount("abracadabra"));
