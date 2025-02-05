//--------------------------------------------Multiply-------------------------------------------

// function multiply(a, b) {
//   return a * b;
// }

// console.log(multiply(2, 3));

//-------------------------------------------Clock(mm)-------------------------------------------

// function past(h, m, s){
//   const hours = h * 60 * 60 * 1000 ;
//   const minutes = m * 60 * 1000;
//   const seconds = s * 1000;
//   return hours + minutes + seconds;
// }

// console.log(past(1, 1, 1));

//-------------------------------Grasshopper - Messi goals Function-------------------------------

// function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
//   return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
// }

// console.log(goals(5, 10, 15));

//-------------------------------Grasshopper - Personalized Message-------------------------------

// function greet(name, owner) {
//   return name === owner ? "Hello boss" : "Hello guest";
// }

// console.log(greet("Mücahid", "Mücahid"));

//-----------------------------------------String Repeat------------------------------------------

// function repeatStr(n, s) {
//   return s.repeat(n);
// }

// console.log(repeatStr(3, "*"));

//----------------------------------------Calculate Average----------------------------------------

// function findAverage(array) {
//   let sum = 0;
//   let average;
//   if (array.length === 0) {
//     return 0;
//   }
//   for (let i = 0; i < array.length; i++) {
//     sum = sum + array[i];
//     average = sum / array.length;
//   }
//   return average;
// }

// console.log(findAverage([1, 2, 3]));

//------------------------------------------Sort and Star------------------------------------------

// function twoSort(s) {
//   const sorting = s.sort()[0].split('').join('***');
//   return sorting;
// }

// console.log(twoSort(["Mücahid"]));

//--------------------------------------Squaring an Argument---------------------------------------

// function square(n) {
//   return n * n;
// }

// console.log(square(2));

//---------------------------------------Reverse List Order----------------------------------------

// function reverseList(list) {
//   return list.reverse();
// }

// console.log(reverseList([1, 2, 3]));

//------------------------------------------Calculate BMI------------------------------------------

// function bmi(weight, height) {
//   let bmi = weight / (height * height);
//   if(bmi <=18.5) return "Underweight";
//   if(bmi <=25.0) return "Normal";
//   if(bmi <=30.0) return "Overweight";
//   if(bmi >30) return "Obese";
// }

// console.log(bmi(63, 1.80));

//---------------------------------------Remove String Spaces---------------------------------------

// function noSpace(x){
//   return x.split(' ').join('');
//   }

// console.log(noSpace('8 j 8   mBliB8g'));

//-------------------------------------Total amount of points---------------------------------------

// function points(games) {
//   return games.reduce(
//     (acc, crv) => (acc + Number(crv[0] > crv[2] ? 3 : crv[0] === crv[2] ? 1 : 0)),
//     0
//   );
// }

// console.log(points(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"]));

/* OR Solutution 2 =>

function points(games) {
  return games.reduce(
    (acc, crv) => (acc + Number(crv[0] > crv[2] ? 3 : crv[0] === crv[2] ? 1 : 0)),
    0
  );
}

console.log(points(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"]));
*/

//----------------------------------Convert a Boolean to a String-----------------------------------

// function booleanToString(b){
//   return b.toString();
// }

// console.log(booleanToString(true));

//---------------------------------------Get Planet Name By ID--------------------------------------

// function getPlanetName(id){
//   var name;
//   switch(id){
//     case 1:
//       name = 'Mercury'
//       break;
//     case 2:
//       name = 'Venus'
//       break;
//     case 3:
//       name = 'Earth'
//       break;
//     case 4:
//       name = 'Mars'
//       break;
//     case 5:
//       name = 'Jupiter'
//       break;
//     case 6:
//       name = 'Saturn'
//       break;
//     case 7:
//       name = 'Uranus'
//       break;
//     case 8:
//       name = 'Neptune'
//       break;
//   }

//   return name;
// }

// console.log(getPlanetName(2));

//-----------------------------------Grasshopper - Check for factor----------------------------------

// function checkForFactor (base, factor) {
//   return base % factor === 0 ? true : false;
// }

// console.log(checkForFactor(10, 2));

//--------------------------------------------MakeUpperCase------------------------------------------

// function makeUpperCase(str) {
//   return str.toUpperCase();
// }

// console.log(makeUpperCase("hello"));

//------------------------------------------Lost Without a Map--------------------------------------

// function maps(x){
//   return x.map(x => x * 2);
//  }

//  console.log(maps([1, 2, 3]));

//------------------------------------------Reversed Strings-----------------------------------------

// function solution(str){
//   return str.split("").reverse().join("");
// }

// console.log(solution("Mücahid"));

//------------------------------------------Counting sheep...---------------------------------------

// function countSheeps(sheep) {
//   let sum = 0;
//   for(let i = 0; i < sheep.length; i++)
//   {
//     if (sheep[i] === true)
//       {
//         sum++;
//       }
//    }
//   return sum;
// }

// console.log(countSheeps([[undefined], 0]));

//-----------------------------------------------Count by X-------------------------------------------

// function countBy(x, n) {
//   let z = [];
//   for(let i = x; i<=x*n; i +=x)
//     {
//      z.push(i);
//     }
//   return z;
// }

// console.log(countBy(1, 10));

//----------------------------------------------Is it even?------------------------------------------

// function testEven(n) {
//   return n % 2 === 0 ? true : false;
// }

// console.log(testEven(0));

//-------------------------------------------Keep up the hoop----------------------------------------

// function hoopCount (n) {
//   return n >= 10 ? "Great, now move on to tricks" : "Keep at it until you get it";
// }

// console.log(hoopCount(5));

//-----------------------------------------You only need one-----------------------------------------

// function check(a, x) {
//   return a.includes(x) ? true : false;
// }

// console.log(check([66, 101], 66));

//-----------------------------------------Cat years, Dog years--------------------------------------

// const humanYearsCatYearsDogYears = function (humanYears) {
//   let catYears = 1;
//   let dogYears = 1;
//   if (humanYears === 1) {
//     return [humanYears, catYears * 15, dogYears * 15];
//   }
//   if (humanYears === 2) {
//     return [humanYears, catYears * 15 + 9, dogYears * 15 + 9];
//   } else {
//     return [
//       humanYears,
//       catYears * 15 + 9 + (humanYears - 2) * 4,
//       dogYears * 15 + 9 + (humanYears - 2) * 5,
//     ];
//   }
// };

// console.log(humanYearsCatYearsDogYears(2));

//---------------------------Convert boolean values to strings 'Yes' or 'No'.------------------------

// function boolToWord(bool) {
//   return bool === true ? "Yes" : "No";
// }

// console.log(boolToWord(true));

//-------------------------------------------Opposites Attract---------------------------------------

// function lovefunc(flower1, flower2){
//   return (flower1 - flower2) % 2 === 0 ? false : true;
// }

// console.log(lovefunc(1,4));

//------------------------------------------Rock Paper Scissors!-------------------------------------

// const rps = (p1, p2) => {
//   const play = ["scissors", "paper", "rock"];

//   if (p1 === play[0] && p2 === play[1]) return "Player 1 won!";
//   if (p1 === play[0] && p2 === play[2]) return "Player 2 won!";

//   if (p1 === play[1] && p2 === play[0]) return "Player 2 won!";
//   if (p1 === play[1] && p2 === play[2]) return "Player 1 won!";

//   if (p1 === play[2] && p2 === play[0]) return "Player 1 won!";
//   if (p1 === play[2] && p2 === play[1]) return "Player 2 won!";

//   if (p1 === play[0] && p2 === play[0]) return "Draw!";
//   if (p1 === play[1] && p2 === play[1]) return "Draw!";
//   if (p1 === play[2] && p2 === play[2]) return "Draw!";
// };

// console.log(rps('rock', 'scissors'));

/* OR Soulution 2 => 

  const rps = (p1, p2) => {
  const rules = {
    'scissors': 'paper',
    'rock': 'scissors',
    'paper': 'rock'
  };
  return rules[p1] === p2 ? 'Player 1 won!' : p1 === p2 ? 'Draw!' : 'Player 2 won!';
};

console.log(rps('rock', 'scissors'));

*/

//--------------------------------------------Opposite number---------------------------------------

// function opposite(number) {
//   return number === number ? -number : number;
// }

// console.log(opposite(1));

//-------------------------------------------Sum of positive----------------------------------------

// function positiveSum(arr) {
//   const filt = arr.filter((x) => x > 0);
//   return filt.reduce((acc, crv) => acc + crv, 0);
// }

// console.log(positiveSum([1,2,3,4,5]));

//---------------------------------------------Array Madness----------------------------------------

// function arrayMadness(a, b) {
//   return a.map((x) => x ** 2).reduce((acc, crv) => acc + crv, 0) >
//     b.map((y) => y ** 3).reduce((acc, crv) => acc + crv, 0)
//     ? true
//     : false;
// }

// console.log(arrayMadness([4,5,6],[1,2,3]));

//-------------------------------------------Polish alphabet----------------------------------------

// function correctPolishLetters(string) {
//   const alp = {
//     ą: "a",
//     ć: "c",
//     ę: "e",
//     ł: "l",
//     ń: "n",
//     ó: "o",
//     ś: "s",
//     ź: "z",
//     ż: "z",
//   };
//   return string.replace(/[ąćęłńóśźż]/g, (m) => alp[m]);
// }

// console.log(correctPolishLetters("Jędrzej Błądziński"));

//-------------------------------------------Will you make it?---------------------------------------

// const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
//   return mpg * fuelLeft >= distanceToPump ? true : false;
// };

// console.log(zeroFuel(50, 25, 2));

//-------------------------------Find Maximum and Minimum Values of a List---------------------------

// const min = function (list) {
//   return Math.min(...list);
// };

// const max = function (list) {
//   return Math.max(...list);
// };

// console.log(min([-52, 56, 30, 29, -54, 0, -110]));
// console.log(max([4,6,2,1,9,63,-134,566]));

//---------------------------------------All Star Code Challenge #18----------------------------------

// function strCount(str, letter) {
//   const sum = str.split("").filter((x) => x === letter);
//   return sum.length;
// }

// console.log(strCount('Hello', 'o'));

//----------------Find the Difference in Age between Oldest and Youngest Family Members--------------

// function differenceInAges(ages) {
//   return [
//     Math.min(...ages),
//     Math.max(...ages),
//     Math.max(...ages) - Math.min(...ages),
//   ];
// }

// console.log(differenceInAges([82, 15, 6, 38, 35]));

//-----------------------------------------Is he gonna survive?--------------------------------------

// function hero(bullets, dragons){
//   return dragons * 2 <= bullets ? true : false;
// }

// console.log(hero(10, 5));

//-----------------------------------------L1: Bartender, drinks!------------------------------------

// const drinks = {
//   jabroni: "Patron Tequila",
//   "school counselor": "Anything with Alcohol",
//   programmer: "Hipster Craft Beer",
//   "bike gang member": "Moonshine",
//   politician: "Your tax dollars",
//   rapper: "Cristal",
// };

// const getDrinkByProfession = (profession) =>
//   drinks[profession.toLowerCase()] || "Beer";

// console.log(getDrinkByProfession("Pug"), "Beer", "'Pug' should map to 'Beer'");

//------------------------------------You Can't Code Under Pressure #1-------------------------------

// function doubleInteger(i) {
//   return i * 2;
// }

// console.log(doubleInteger(2));

//---------------------------------------------Triple Trouble----------------------------------------

// function tripleTrouble(one, two, three) {
//   let o = one.split("");
//   let t = two.split("");
//   let th = three.split("");
//   let sentence = "";
//   for (let i = 0; i < o.length; i++) {
//     sentence += o[i] + t[i] + th[i];
//   }
//   return sentence;
// }

// console.log(tripleTrouble("aaa","bbb","ccc"));

//------------------------------Thinkful - Number Drills: Blue and red marbles------------------------

// function guessBlue(blueStart, redStart, bluePulled, redPulled) {
//   let blueLeft = blueStart - bluePulled;
//   let redLeft = redStart - redPulled;
//   let allLeft = blueLeft + redLeft;

//   return blueLeft / allLeft;
// }

// console.log(guessBlue(5, 5, 2, 3));

//-----------------------------------------Grasshopper - Summation------------------------------------

// const summation = function (num) {
//   let sum = 0;
//   for (let i = 0; i <= num; i++) {
//     sum += i;
//   }
//   return sum;
// };

// console.log(summation(1));

//---------------------------------------------Keep Hydrated!----------------------------------------

// function litres(time) {
//   let timeTrunc = Math.trunc(time);
//   return Math.trunc(timeTrunc * 0.5);
// }

// console.log(litres(2));

//----------------------------------------------Even or Odd------------------------------------------

// function evenOrOdd(number) {
//   return number % 2 === 0 ? "Even" : "Odd";
// }

// console.log(evenOrOdd(2));

//---------------------------------------------Return Negative---------------------------------------

// function makeNegative(num) {
//   return num < 0 ? num : -num;
// }

// console.log(makeNegative(42));

//--------------------------------------Convert a Number to a String!--------------------------------

// function numberToString(num) {
//   return num.toString();
// }

// console.log(numberToString(67));

//------------------------------------Remove First and Last Character--------------------------------

// function removeChar(str) {
//   let strRe = str.split("");
//   strRe.pop();
//   strRe.shift();
//   return strRe.join("");
// }

// console.log(removeChar('eloquent'));

//---------------------------------------------Square(n) Sum-----------------------------------------

// function squareSum(numbers) {
//   return numbers.map((n) => n ** 2).reduce((acc, crv) => acc + crv, 0);
// }

// console.log(squareSum([1,2]));

//---------------------------------Find the smallest integer in the array----------------------------

// function findSmallestInt(arr) {
//   return Math.min(...arr);
// }

// console.log(findSmallestInt([78,56,232,12,8]));

//----------------------------------------------Collinearity-----------------------------------------

// function collinearity(x1, y1, x2, y2) {
//   return x1 * y2 === y1 * x2;
// }

// console.log(collinearity(1, 1, 1, 1));

//---------------------------------------------Neutralisation----------------------------------------

// function neutralise(s1, s2) {
//   const sOne = s1.split("");
//   const sTwo = s2.split("");
//   let sum = "";
//   for (let i = 0; i <= sOne.length; i++) {
//     if (sOne[i] === "-" && sTwo[i] === "-") {
//       sum += "-";
//     }
//     if (sOne[i] === "+" && sTwo[i] === "+") {
//       sum += "+";
//     }
//     if (sOne[i] === "-" && sTwo[i] === "+") {
//       sum += 0;
//     }
//     if (sOne[i] === "+" && sTwo[i] === "-") {
//       sum += 0;
//     }
//   }
//   return sum;
// }

// console.log(neutralise("--++--", "++--++"));

//----------------------------------------------Flick Switch-----------------------------------------

// function flickSwitch(arr) {
//   let flag = true;
//   return arr.map((e) => (e === "flick" ? (flag = !flag) : flag));
// }

// console.log(flickSwitch(["codewars", "flick", "code", "wars"]));

//--------------------------------------Convert a String to a Number!--------------------------------

// const stringToNumber = function(str){
//   return Number(str);
// }

// console.log(stringToNumber("1234"));

//--------------------------------------------Returning Strings--------------------------------------

// function greet(name){
//   return `Hello, ${name} how are you doing today?`
// }

// console.log(greet("Ryan"));

//--------------------------------------Basic Mathematical Operations--------------------------------

// function basicOp(o, a, b) {
//   return eval(a + o + b);
// }

// console.log(basicOp("+", 4, 7));

//-----------------------------------------------Sum Arrays------------------------------------------

// function sum(numbers) {
//   return numbers.reduce((acc, crv) => acc + crv, 0);
// }

// console.log(sum([1, 5.2, 4, 0, -1]));

//-------------------------------Convert number to reversed array of digits--------------------------

// function digitize(n) {
//   return `${n}`
//     .split("")
//     .map((c) => Number(c))
//     .reverse();
// }

// console.log(digitize(35231));

//--------------------------------------------Century From Year--------------------------------------

// function century(year) {
//   return Math.ceil(year / 100);
// }

// console.log(century(1705));

//----------------------------------------A Needle in the Haystack-----------------------------------

// function findNeedle(haystack) {
//   return haystack.includes("needle")
//     ? `found the needle at position ${haystack.indexOf("needle")}`
//     : "Your function didn't return anything";
// }

// console.log(
//   findNeedle([
//     "3",
//     "123124234",
//     undefined,
//     "needle",
//     "world",
//     "hay",
//     2,
//     "3",
//     true,
//     false,
//   ])
// );

//----------------------------------------------Fake Binary------------------------------------------

// function fakeBin(x) {
//   return x
//     .split("")
//     .map((c) => (c >= 5 ? c.replace(c, "1") : c.replace(c, "0")))
//     .join("");
// }

// console.log(fakeBin("45385593107843568"));

//--------------------------------------Abbreviate a Two Word Name-----------------------------------

// function abbrevName(name) {
//   let convert = name.split(" ");
//   return `${convert[0][0].toUpperCase()}.${convert[1][0].toUpperCase()}`;
// }

// console.log(abbrevName("Sam Harris"));

//--------------------------------Count of positives / sum of negatives------------------------------

// function countPositivesSumNegatives(input) {
//   let positive = input?.filter((f) => f > 0);
//   let negative = input?.filter((f) => f < 0);
//   if (!input?.length) {
//     return [];
//   }
//   return [positive.length, negative.reduce((acc, crv) => acc + crv, 0)];
// }

// console.log(
//   countPositivesSumNegatives([
//     0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14,
//   ])
// );

//----------------------------------------DNA to RNA Conversion--------------------------------------

// function DNAtoRNA(dna) {
//   return dna.replaceAll("T","U");
// }

// console.log(DNAtoRNA("TTTT"));

//--------------------------------Thinkful - Logic Drills: Traffic light-----------------------------

// function updateLight(current) {
//   return current === "green"
//     ? "yellow"
//     : current === "yellow"
//     ? "red"
//     : "green";
// }

// console.log(updateLight("green"));

//---------------------------------------Third Angle of a Triangle-----------------------------------

// function otherAngle(a, b) {
//   return 180 - a - b;
// }

// console.log(otherAngle(30, 60));

//--------------------------------------------Sum Mixed Array----------------------------------------

// function sumMix(x) {
//   return x.map((x) => Number(x)).reduce((acc, crv) => acc + crv, 0);
// }

// console.log(sumMix([9, 3, "7", "3"]));

//----------------------------------------------Powers of 2------------------------------------------

// function powersOfTwo(n) {
//   return Array.from({ length: n + 1 }, (v, k) => 2 ** k);
// }

// console.log(powersOfTwo(0));

//------------------------------------------Is it a palindrome?--------------------------------------

// function isPalindrome(x) {
//   return x.toLowerCase() === x.toLowerCase().split("").reverse().join("")
//     ? true
//     : false;
// }

// console.log(isPalindrome("Abba"));

//---------------------------------------------Switch it Up!-----------------------------------------

// function switchItUp(number) {
//   let object = {
//     0: "Zero",
//     1: "One",
//     2: "Two",
//     3: "Three",
//     4: "Four",
//     5: "Five",
//     6: "Six",
//     7: "Seven",
//     8: "Eight",
//     9: "Nine",
//   }[number];
//   return object;
// }

// console.log(switchItUp(1));

//---------------------------------------------Twice as old------------------------------------------

// function twiceAsOld(dadYearsOld, sonYearsOld) {
//   return Math.abs(dadYearsOld - 2 * sonYearsOld);
// }

// console.log(twiceAsOld(36,7));

//-------------------------------------------Count the Monkeys!--------------------------------------

// function monkeyCount(n) {
//   let collect = [];
//   for(let i = 1 ; i <= n; i++)
//   {
//     collect.push(i)
//   }
//   return collect;
//  }

//  console.log(monkeyCount(5));

//--------------------------------------Will there be enough space?----------------------------------

// function enough(cap = 0, on = 0, wait = 0) {
//   return on + wait === cap || on + wait < cap ? 0 : Math.abs(on + wait - cap);
// }

// console.log(enough(10, 5, 5));

//--------------------------------------------Descending Order---------------------------------------

// function descendingOrder(n) {
//   let divide = n
//     .toString()
//     .split("")
//     .sort((a, b) => b - a)
//     .join("");
//   return Number(divide);
// }

// console.log(descendingOrder(15));

//-------------------------------------------------Accum---------------------------------------------

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

/* OR Soulution 2

function accum(s) {
  return s
    .split("")
    .map((c, i) => c.toUpperCase() + c.toLowerCase().repeat(i))
    .join("-");
}

console.log(accum("ZpglnRxqenU"));
*/

