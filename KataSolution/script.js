// function points(games) {
//   return games.reduce(
//     (acc, crv) => (acc + Number(crv[0] > crv[2] ? 3 : crv[0] === crv[2] ? 1 : 0)),
//     0
//   );
// }

// const a = points(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"]);
// console.log(a);

// function solution(str){
//   return str.split("").reverse().join("");
// }
// const a = solution("World");
// console.log(a);

// function countSheeps(sheep) {

//   let sum = 0;
//   for(let i = 0; i < sheep.length; i++)
//   {
//     if(sheep.includes(true))
//     {
//       sum++;
//     }

//    }
//   return sum;
// }

// let a = countSheeps([undefined,null,false,true]);
// console.log(a);

// function countBy(x, n) {
//   let z = [];
//   for(let i = x; i<=x*n; i +=x)
//     {
//      z.push(i);
//     }
//   return z;

// }
// let a =countBy(2,5);
// console.log(a);
//------------------------------------------------------------------------------------
// function isIsogram(word){
//   word = word.toLowerCase().split("").sort();
//   for (var i=0;i<word.length-1;i++){
//     if (word[i]==word[i+1]) return false;
//     }
//   return true;
// }
//-----------------------------------------------------------------------------------
// const a = isIsogram("abDerkalıs");
// console.log(a);

// let str1 = "GeeksforGeeks";
// let str2 = "Geeks123";

// let regex = /^[a-zA-Z]+$/;

// console.log(regex.test(str1));
// console.log(regex.test(str2));
//------------------------------------------------------------------------------------
// function humanYearsCatYearsDogYears(humanYears)
// {
//   return [
//     humanYears,
//     ( humanYears - 1 ? 16 : 11 ) + 4 * humanYears,
//     ( humanYears - 1 ? 14 : 10 ) + 5 * humanYears,
//   ];
// }
// const a = humanYearsCatYearsDogYears("10");
// console.log(1 - 1 ? 16 : 11);

//-------------------------------------------------------------------
// const rps = (p1, p2) => {
//   const rules = {
//     'scissors': 'paper',
//     'rock': 'scissors',
//     'paper': 'rock'
//   };
//   return rules[p1] === p2 ? 'Player 1 won!' : p1 === p2 ? 'Draw!' : 'Player 2 won!';
// };

// const a = rps("scissors","scissors");
// console.log(a);
//---------------------------------------------------------------------

// function arrayMadness(a, b) {
//   return a.map((x) => x ** 2).reduce((acc, crv) => acc + crv, 0) >
//     b.map((y) => y ** 2).reduce((acc, crv) => acc + crv, 0)
//     ? true
//     : false;
// }

// const a = arrayMadness([4,5,6],[1,2,3]);
// console.log(a);
//-------------------------------------------------------------------------
// function correctPolishLetters(string) {
//   const alp = {
//     "ą" : "a",
//     "ć" : "c",
//     "ę" : "e",
//     "ł" : "l",
//     "ń": "n",
//     "ó" : "o",
//     "ś" : "s",
//     "ź" : "z",
//     "ż" : "z"
//   }
//   return string.replace(/[ąćęłńóśźż]/g, m => alp[m])
// }

// const a = correctPolishLetters("Wałęsa");
// console.log(a);

// const chars = {
//   'a': 'x',
//   'b': 'y',
//   'c': 'z'
// };

// let s = '234abc567bbbbac';
// s = s.replace(/[abc]/g, m => chars[m]);
// console.log(s);

//-------------------------------------------------------------------------

// var polishLetters = {
//   "ą": "a",
//   "ć": "c",
//   "ę": "e",
//   "ł": "l",
//   "ń": "n",
//   "ó": "o",
//   "ś": "s",
//   "ź": "z",
//   "ż": "z",
// };

// function correctPolishLetters (string) {
// return string.split('').map((c) => polishLetters[c] || c).join("");
// }

// const a = correctPolishLetters("Wałęsa");
//  console.log(a);

//--------------------------------------------------------------------------------

// let list = [1,2,3,4,5,6];
// console.log(...list);

//------------------------------------------------------------------------------

// function strCount(str, letter){
//   return str.split(letter);
// }

// const a = strCount("oooollmmmmmmrr","m");
// console.log(a);

//-------------------------------------------------------------------------------

// function hero(bullets, dragons){
//   return dragons * 2 <= bullets ? true : false;
// }

// const a = hero(5,4);
// console.log(a);
//--------------------------------------------------------------------------------

// function tripleTrouble(one, two, three){
//    let o = one.split('');
//    let t = two.split('');
//    let th = three.split('');
//    let sentence= '';
//    for(let i = 0; i < o.length; i++ )
//     {
//       sentence += o[i] + t[i] + th[i];
//     }
//    return sentence;
// }

// console.log(tripleTrouble("aaa","bbb","ccc"W));

// function findSmallestInt(arr) {
//   console.log(Math.min(arr));
// }

// findSmallestInt([1,5]);
//--------------------------------------------------------------------
// function neutralise(s1, s2) {
//   const sOne = s1.split("");
//   const sTwo = s2.split("");
//   let sum = "";
//   for (let i = 0; i <= sOne.length; i++) {
//     if (sOne[i] === "-" && sTwo[i] === "-") {
//        sum += "-";
//     }
//     if (sOne[i] === "+" && sTwo[i] === "+") {
//        sum += "+";
//     }
//     if (sOne[i] === "-" && sTwo[i] === "+") {
//        sum += 0;
//     }
//     if (sOne[i] === "+" && sTwo[i] === "-") {
//       sum += 0;
//    }

//   }
//   return sum;
// }
//-------------------------------------------------------------------------
// function flickSwitch(arr){
//   let flag = true
//   return arr.map(e => e === 'flick' ? flag = !flag : flag)
// }

// console.log(flickSwitch(["was", "wars", "flick", "flick", "flick"]));

//-----------------------------------------------------------------------------

// function digitize(n) {
//   return `${n}`.split("").map(c => Number(c)).reverse();
// }
//----------------------------------------------------------------------------

// function century(year) {
//   return Math.ceil(year / 100);
// }

// console.log(century(900));
//------------------------------------------------------------------------------
// function fakeBin(x){
//   return x.split("").map(c => c >= 5 ? c.replace(c , "1"): c.replace(c , "0")).join("");
// }

// console.log(fakeBin("123456789"));
//---------------------------------------------------------------------------------

// function abbrevName(name){
//   let convert = name.split(" ");
//   return `${convert[0][0].toUpperCase()}.${convert[1][0].toUpperCase()}`;

// }

// console.log(abbrevName("mücahid KOÇ"));

//----------------------------------------------------------------------------------

// function countPositivesSumNegatives(input) {
//   let positive = input.filter((f) => f > 0);
//   let negative = input.filter((f) => f < 0);
//   if (!input.length) //önemli  --->> input.length === 0 hata verir.
//   {
//     return [];
//   }
//   return [positive.length, negative.reduce((acc, crv) => acc + crv, 0)];
// }
// console.log(countPositivesSumNegatives([]));

//------------------------------------------------------------------------------------

// function removeExclamationMarks(s) {
//   return s.replaceAll("!", "");
// }

// console.log(removeExclamationMarks("Hello World!!"));

//------------------------------------------------------------------------------------
// function updateLight(current) {
//   const obje = {
//     green: "yellow",
//     yellow: "red",
//     red: "green"
//   }[current];
//   return obje;
// }

//  console.log(updateLight("green"));

//--------------------------------------------------------------------------------------

// function sumArray(array) {
//   return array === null || array === undefined || array.length < 2 ? 0 :  array.reduce((acc,crv) => acc + crv,0) - Math.min(...array) - Math.max(...array) ;
// }

// console.log(sumArray(undefined));

//------------------------------------------------------------------------------------------

// function doubleChar(str) {
//   return str.split("").map(x => x.repeat(2)).join("");
// }
// console.log(doubleChar("String"));

//------------------------------------------------------------------------------------------

// console.log(Array.from({ length: 5 }, (v, i) => i));

//------------------------------------------------------------------------------------------

// function switchItUp(number){
//   let object = {
//     1 : "One",
//     2 : "Two",
//     3 : "Three",
//     4 : "Four",
//     5 : "Five",
//     6 : "Six",
//     7 : "Seven",
//     8 : "Eight",
//     9 : "Nine"

//   }[number];
//   return object;
// }

// console.log(switchItUp(6));

//---------------------------------------------------------------------------------------

// function twiceAsOld1(dadYearsOld, sonYearsOld) {
//   return sonYearsOld * 2 === dadYearsOld ? 0 : sonYearsOld === 0 ? dadYearsOld : sonYearsOld * 2 > dadYearsOld ?sonYearsOld * 2 -dadYearsOld   : dadYearsOld - sonYearsOld * 2;
// }

// console.log(twiceAsOld1(55,30));

// function twiceAsOld2(dadYearsOld, sonYearsOld) {
//   return Math.abs(dadYearsOld - 2 * sonYearsOld);
// }

// console.log(twiceAsOld2(55,30));

//--------------------------------------------------------------------------------------------

// function monkeyCount(n) {
//   let collect = [];
//   for(let i = 1 ; i <= n; i++)
//   {
//     collect.push(i)
//   }
//   return collect.reverse();
//  }

//  console.log(monkeyCount(1));

//  function monkeyCount1(n)
//  {
//   return Array.from({length:n}, (v,i) => i+1)
//  }
//  console.log(monkeyCount1(5));

//--------------------------------------------------------------------------------------------------

// function correct(string)
// {
// 	let collect = {
//     5 : "S",
//     0 : "O",
//     1 : "I"
//   }

//   return string.split("").map(char => collect[char] || char).join("");
// }

// console.log(correct("DUBL1N"));

// function removeEveryOther(arr){
//   let collect = [];
//   for(let i = 0; i < arr.length ; i+=2)
//   {
//      collect.push(arr[i]);
//   }
//   return collect;
// }
//  console.log(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

//-----------------------------------------------------------------------------------------------------------

// function firstNonConsecutive (arr) {
//   for(let i = 1; i < arr.length; i++)
//   {
//     if(arr[i-1] - arr[i] !== -1)
//     {
//       return  `first, ${arr[i]}`
//     }
//   }
//   return `first, ${null}`;
// }
// console.log(firstNonConsecutive([1,2,3,4,5,7,8]));

//----------------------------------------------------------------------------

// class Ship {
//   constructor(draft, crew) {
//     this.draft = draft
//     this.crew = crew

//   }
//   isWorthIt() {
//     return  this.draft - this.crew * 1.5 > 20 ? true : false;
//   }
// }

// let ship = new Ship (100, 20);
// console.log(ship.isWorthIt());

//--------------------------------------------------------------------------------

// class Person {

//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//     this.info =`${this.name}s age is ${this.age}`;
//   }
// }
// let person = new Person("John", 34)
// console.log(person.info);

//-----------------------------------------------------------------------------
// class Ghost {
//   constructor() {
//     this.color = ["white", "yellow", "purple", "red"][
//       Math.floor(Math.random() * 4)
//     ];
//   }
// }

// let ghost = new Ghost();
// console.log(ghost.color);

//-------------------------------------------------------------------------------
// class Animal {
//   constructor(voice) {
//     this.voice = voice;
//   }
// }
// class Cat extends Animal {
//   constructor(voice) {
//     super(voice);
//   }
//   speak() {
//     return `${this.voice} meows.`
//   }
// }

// let cat = new Cat("Mr Whiskers");
// console.log(cat.speak());

//--------------------------------------------------------------------------------
// function Dog (breed) {
//   this.breed = breed;
// }

// var snoopy = new Dog("Beagle");

// snoopy.bark = function() {
//   return "Woof";
// };

// var scoobydoo = new Dog("Great Dane");
// scoobydoo.bark = function() {
//   return "Woof";
// };
// console.log(scoobydoo.bark());
//----------------------------------------------------------------------------------

// class Guesser {
//   constructor(number, lives) {
//     this.number = number;
//     this.lives = lives;
//   }

//   guess(n) {
//     if (!this.lives) throw 'No guesses left';
//     if (n === this.number) return true;
//     this.lives--;
//     return false;
//   }
// }
// let guesser = new Guesser(10, 2);
// console.log(guesser.guess(9));
// console.log(guesser.lives);

//-------------------------------------------------------------------------------------
// let user = {
//   name: "John",
//   surname: "Smith",

//   get fullName() {
//     return `${this.name} ${this.surname}`;
//   },

//   set fullName(value) {
//     [this.name, this.surname] = value.split(" ");
//   }
// };

// console.log(user.fullName);
//-------------------------------------------------------------------------------------
// let user = {
//   get name() {
//     return this._name;
//   },

//   set name(value) {            //set değer döndürmez.  return "İsim 4 harften az" yapamazsın.
//     if (value.length < 4) {    // set var olan durumu güncellemek için kullanılır.
//      value = "İsim 4 harften az"
//     }
//     this._name = value;
//   }
// };

// user.name = "Pet";
// console.log(user.name);
//-------------------------------------------------------------------------------------------
// class BankAccount {
//   #balance;

//   constructor(initialBalance) {
//     this.#balance = initialBalance;
//   }

//   deposit(amount) {
//     if (amount > 0) {
//       this.#balance += amount;
//     }
//   }

//   withdraw(amount) {
//     if (amount > 0 && amount <= this.#balance) {
//       this.#balance -= amount;
//     }
//   }

//   getBalance() {
//     return this.#balance;
//   }
// }

// const account = new BankAccount(100);
// console.log(account.getBalance());

//-----------------------------------------------------------------------------------------

// class Cube {
//   constructor(side=0) {
//     this.setSide(side);
//   }
//   getSide() {
//     return this.side;
//   }
//   setSide(n) {
//     if(n < 0)
//     {
//       this.side = Math.abs(n);
//     }
//     else {
//       this.side = n;
//     }
//   }
// }
// let cube = new Cube();
// console.log(cube.getSide());

//-------------------------------------------------------------------------------------------

// class Person {
//   constructor(firstName = "John",lastName = "Doe",age = 0,  gender = "Male") {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     this.gender = gender;
//   }
//   sayFullName() {
//     return this.firstName +' '+this.lastName;
//   }
//   static greetExtraTerrestrials(raceName) {
//     return `Welcome to Planet Earth ${raceName}" `
//   }
// }

// let person = new Person();
// person.age;
//---------------------------------------------------------------------------------

//!!!------------>> Önemli

// function NameMe(first, last) {
//   this.firstName = first;
//   this.lastName = last;
//   this.name =  this.firstName + ' ' + this.lastName;
// }

// var n = new NameMe('John', 'Doe');
// console.log(n.lastName);

//---------------------------------------------------------------------------------

// Math.roundTo = function (number, precision) {
//   return number + precision;
// }

// console.log(Math.roundTo(5.12,2));

//-----------------------------------------------------------------------------

// let a = {
//   hobbies: ["merhaba","hi"],
// };

// for(const hobbie of a.hobbies) {
//   console.log(hobbie.toUpperCase());
// }

//------------------------------------------------------------------------------
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

// let a = getCount("abacabaeyuei");
// console.log(a);

// //OR

// function getCount(str) {
//   return (str.match(/[aeiou]/ig)||[]).length;
// }
//------------------------------------------------------------------------------
// function disemvowel(str) {
//   let arr = [];
//   str
//     .split("")
//     .forEach((d) =>
//       d === "a" || d === "e" || d === "i" || d === "o" || d === "u"
//       || d === "A" || d === "E" || d === "O" || d === "U" || d === "I"
//         ? ""
//         : arr.push(d)
//     );
//   return arr.join("");
// }

// let a = disemvowel("abacipotrO");
// console.log(a);

// // OR

// function disemvowel(str) {
//   return str.replace(/[aeiou]/gi, '');
// }

//OR

// const vowels = 'aeiou';

// function disemvowel(str) {
//   return str
//     .split('')
//     .filter(letter => !vowels.includes(letter.toLowerCase()))
//     .join('');
// }

// let a = disemvowel('awuOpoacvrgii');
// console.log(a);

//-------------------------------------------------------------------------

// function descendingOrder(n){
//   let divide = n.toString().split("").sort((a,b) => b-a).join("");
//   return Number(divide);
// }

// let a = descendingOrder(15);
// console.log(a);

//---------------------------------------------------------------------------

// function filter_list(l) {
//   return l.filter(f => typeof f ===  "number");
// }

// let a = filter_list([1,2,'a','b']);
// console.log(a);

//-------------------------------------------------------------------------

// function getMiddle(s) {
//     let divide = s.length;
//     let calEven = divide / 2;
//     let calOdd = Math.floor(s.length / 2);
//     let even = s.split("")[calEven - 1] + s.split("")[calEven];
//     let odd = s.split("")[calOdd];
//     return divide % 2 === 0 ? even : odd;
// }
//OR
// function getMiddle2(s)
// {
//   return s.slice((s.length-1)/2, s.length/2+1);
// }

// let a = getMiddle("taretar");
// console.log(a);

//----------------------------------------------------------------

// var isSquare = function(n){
//   let sq = Math.sqrt(n);
//   return sq % 1 != 0 ? false : true; // fix me
// }

// console.log(isSquare(-1));

//------------------------------------------------------

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
// //OR
// function accum1(s) {
//   return s
//     .split("")
//     .map((c, i) => c.toUpperCase() + c.toLowerCase().repeat(i))
//     .join("-");
// }

// let a = accum1("ZpglnRxqenU");
// console.log(a);

//-----------------------------------------------------------------------------

// function toJadenCase(n) {
//   return n
//     .split(" ")
//     .map(c => c[0].toUpperCase() + c.slice(1).toLowerCase())
//     .join(" ");
// }

// let a = toJadenCase("how are you");
// console.log(a);  // "How Are You"
//--------------------------------------------------------------------------
// let a = {
//   id: 1,
//   isim : "Mücahid"
// }

// let b = {
//   id : 2,
//   isim : "cahid",
//   ...a
// }

// let c = {
//   ...b,
//   ...a
// }
//-------------------------------------------------------------------------------
// var value = null;

// // Doğru şekilde null'u kontrol etmek için
// if (value === null) {
//     console.log("Değer null'dır.");
// }


