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

//--------------------------------------------Shortest Word-----------------------------------------

// function findShort(s) {
//   return Math.min(...s.split(" ").map((x) => x.length));
// }

// console.log(findShort("bitcoin take over the world maybe who knows perhaps"));

//------------------------------------------Complementary DNA---------------------------------------

// function dnaStrand(dna) {
//   return dna
//     .split("")
//     .map((x) =>
//       x === "A" ? "T" : x === "T" ? "A" : x === "G" ? "C" : x === "C" ? "G" : ""
//     )
//     .join("");
// }

// console.log(dnaStrand("ATCG"));

/* OR Solution 2

let pairs = { A: "T", T: "A", C: "G", G: "C" };

function dnaStrand(dna) {
  return dna
    .split("")
    .map(v => pairs[v])
    .join("");
}

console.log(dnaStrand("ATCG"));

*/

//------------------------------------------Credit Card Mask----------------------------------------

// function maskify(cc) {
//   let ccA = cc.split("");
//   let ccAL = cc.split("").length;
//   let ccAReverse = cc.split("").reverse();
//   let a = /./g;

//   let first = [];
//   let second = [];

//   for (let i = 0; i <= 3; i++) {
//     first.push(ccAReverse[i]);
//   }

//   for (let i = 0; i < ccAL - 4; i++) {
//     second.push(ccA[i])
//   }

//   return second.join("").replaceAll(a, '#') + first.reverse().join("");
// }

// console.log(maskify("4556364607935616"));

/* OR Soulution 2

function maskify(cc) {
  return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
}

console.log(maskify("4556364607935616"));

*/

//---------------------------------Sum of two lowest positive integers------------------------------

// function sumTwoSmallestNumbers(numbers) {
//   let total = numbers.sort((a, b) => a - b);
//   return total[0] + total[1];
// }

// console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77]));

//--------------------------------------------Sum of Numbers----------------------------------------

// function getSum(a, b) {
//   let total = 0;
//   if (a === b) {
//     return a;
//   }
//   if (a < b) {
//     for (let i = a; i <= b; i++) {
//       total += i;
//     }
//   }
//   if (a > b) {
//     for (let i = b; i <= a; i++) {
//       total += i;
//     }
//   }
//   return total;
// }

// console.log(getSum(0, 2));

/* OR Solution 2
function GetSum(a,b)
{
  return (Math.abs(a - b) + 1) * (a+b) / 2;
}

console.log(getSum(0, 2));

 */
//--------------------------------------------Friend or Foe?----------------------------------------

// function friend(friends){
//   return friends.filter(x => x.length === 4)
// }

// console.log(friend(["Ryan", "Kieran", "Mark"]));

//----------------------------------------------Two to One------------------------------------------

// function longest(s1, s2) {
//   let con = (s1.split(" ") + s2.split(" ")).split("").sort();
//   return [...new Set(con)].join("");
// }

// console.log(longest("aretheyhere", "yestheyarehere"));

//-----------------------------------------Categorize New Member------------------------------------

// function openOrSenior(data) {
//   let result = [];
//   for (let i = 0; i < data.length; i++) {
//     let a = data[i][0];
//     let b = data[i][1];
//     if (a >= 55 && b > 7) {
//       result.push("Senior");
//     } else {
//       result.push("Open");
//     }
//   }
//   return result;
// }

// console.log(
//   openOrSenior([
//     [45, 12],
//     [55, 21],
//     [19, -2],
//     [104, 20],
//   ])
// );

/* OR Solution 2

function openOrSenior(data) {
  return data.map(([age, handicap]) =>
    age > 54 && handicap > 7 ? "Senior" : "Open"
  );
}

console.log(
  openOrSenior([
    [45, 12],
    [55, 21],
    [19, -2],
    [104, 20],
  ])
);

*/

//------------------------------------------String ends with?---------------------------------------

// function solution(str, ending) {
//   if (!ending) {
//     return false;
//   }
//   let end = ending.length;
//   return str.slice(-end) === ending ? true : false;
// }

// console.log(solution('abc', ''));

/* OR Solution 2

function solution(str, ending){
  return str.endsWith(ending);
}

console.log(solution('abc', 'bc'));

*/

//------------------------------------Find the next perfect square!---------------------------------

// function findNextSquare(sq) {
//   let number = Math.sqrt(sq);
//   let number2 = Math.sqrt(sq) + 1;
//   return sq % number === 0 ?  number2 * number2 : -1 ;
// }

// console.log(findNextSquare(100));
