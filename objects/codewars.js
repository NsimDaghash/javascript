
/*function between(a, b) {
    let list=[];
    // your code here
    console.log(a);
    console.log(b);
    if (a > b) {
      for (let i = a; i <= b; i++) 
        list.push(i);
      }
    else{
        for (let i = b; i <= a; i++) 
        list.push(i);
    }
    console.log(list);
  }

  between(1,4);
  */
/*
  function ensureQuestion(s) {
    // Code here
    console.log(s[-1]);
    if (s[-1] == "?"){
        console.log(s);
        return s;
    }
    else
        s=s+"?"
        console.log(s);
        return (s)
  }

  ensureQuestion("yes?");

  */

 
 /*
  function divisibleBy(numbers, divisor){       //////////////////////////////////////////////////////
    let arr=[];
    for(let i=0;i<numbers.length;i++){
      if ((numbers[i] % divisor) == 0){
          arr.push(numbers[i]);
      }
    }
    return (arr);
  }
  divisibleBy([1,2,3,4,5,6], 2);
  */
/*
  function bonusTime(salary, bonus) {
    // your code here
        let salb = (salary * 10);
          if (bonus==true) {
              console.log("\u00A3", salb)
              return("\u00A3"+""+salb);
            }
          else{
              console.log("\u00A3", salary)
              return("\u00A3"+""+salary);
          }
    }

    bonusTime(10000, true);
*/
/*
function toarr(string){
    let d =Object.assign([], string);
    console.log(d);
}

toarr("Robin Singh");

*/
/*
function find_average(array) {
  // your code here
    let total = 0;
    let count = 0;
   //console.log(array.length);
  if(array==0){
    array[0] = 0;
    return 0;
    }
  else{
    array.forEach(function(item, index) {
        total += item;
        count++;
    });
    console.log (total / count);
    return (total / count);
  }
}
let array = [];
find_average([1,2,8,6,9,5,46,78,548,56,11]);
*/
/*
function find_average(array) {

  // your code here
    let total = 0;
    let count = 0;

  if(array==[]){
    arr[0]=0;
    return 0;
    }
  else{
    array.forEach(function(item, index) {
        total += item;
        count++;       
    };
    return (total / count);
  }
} */
/*
// take anumber and power 2 the range from 0 to the number
function powersOfTwo(n){
  var myArray = [];
  for (var i=0; i<=n; i++){
    myArray.push(i**2);
  }
  console.log(myArray);
  return myArray
}

powersOfTwo(5);
*/
/*
// clear string from spaces
function noSpace(x){
  console.log( x.split(' ').join('') ); 
}

noSpace('the white house');
*/
/*
// Given a string s, write a method (function) that will return true if its a valid single integer or floating number or false if its not.
function isDigit(s) {
  //your code
    if (typeof s != "string") return false // we only process strings!  
    return !isNaN(s) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
         !isNaN(parseFloat(s)) // ...and ensure strings of whitespace fail
}
*/

/*
//Return a new array consisting of elements which are multiple of their own index in input array (length > 1).

function multipleOfIndex(array) {
  // good luck
  let result = [];
  for(let i=0;i<array.length ; i++)
    {
      if((array[i] % i)== 0 )
        result.push(array[i]);
    }
  return (result);
}
*/
/*
//  In this simple exercise, you will build a program that takes a value, integer , and returns a list of its multiples up to another value, limit . If limit is a multiple of integer, it should be included as well. There will only ever be positive integers passed into the function, not consisting of 0. The limit will always be higher than the base.
//For example, if the parameters passed are (2, 6), the function should return [2, 4, 6] as 2, 4, and 6 are the multiples of 2 up to 6.
// If you can, try writing it in only one line of code. 

function findMultiples(integer, limit) {
  //your code here
  const arr = [];
  
  for (let i = 1; i <= limit; i += 1) {
    
      if (integer * i <= limit) {
        arr.push(integer * i);
      }
  }
  return arr;
}

*/
/*
function nameShuffler(str){
  //Shuffle It
  let tmp;
  let arr=str.split(" ")
  console.log(arr);
  tmp =arr[0];
  arr[0] = arr[1];
  arr[1]= tmp;
  str=arr[0]+" "+arr[1];
  return(str);
}

nameShuffler("finar tarabshi");
*/
/*
function sumMix(x){
  let result = 0;
  for (let i=0 ; i< x.length ; i++) {
    result += parseInt(x[i]);
  }
  console.log (result);
  return result;
}

sumMix([9, 3, '7', '3'])
*/

/*
function digitize(n) {
  //code here
const resultArr = [];            // the result array
const num = String(n).split('').reverse().join('');   // split the string to array and reverse it

num.map((x) => resultArr.push(Number(x)));  

console.log(resultArr);
}
digitize(35231);

*/
/*
function capitalizeWord(word) {

  let tmp = word[0].();
  word=tmp + word.substr(1, );
  return word;
}
capitalizeWord('word');
*/
/*
function sumStr(a,b) {
  let str ;
  str = parseInt(a) + parseInt(b) + "";
  console.log(str,typeof(str));
  return (str);
}
*/
/*
function sumStr(a,b) {
  let str ;
  const myNumber = parseInt(a) || 0;

  const myNumber1 = parseInt(b) ||0;
  str = myNumber+myNumber1 + "";
  console.log(str);
  return (str);
}
sumStr('','8');
sumStr('17','8');
sumStr('25',' ');
 */
/*
function removeChar(str){
  //You got this!
   let l=str.length-1
   str = str.substr(1,l-1);
   console.log(l);
   console.log(str);
 
 };

 removeChar('finar');
 removeChar('abo mshot'); 
 removeChar('telhas tizi');
*/

//[8kyu] How good are you really?
function betterThanAverage(classPoints, yourPoints) {
  // Your code here
  var classAvg = 0;
  for (var i = 0; i < classPoints.length; i++){
    classAvg += classPoints[i]; 
  }
  classAvg = classAvg/classPoints.length; 
  return yourPoints > classAvg;
}

//[8kyu] Check the exam
function checkExam(array1, array2) {
  let points = 0;
  
  array2.map((x, y) => {
    if (x === "") {
      points += 0;
    } else if (x === array1[y]) {
      points += 4;
    } else {
      points += -1;
    }
  })
  
  return points > 0 ? points : 0;
}

//[8kyu] Filling an array (part 1)
const arr = N => {
  const arr = [];
  
  for(let i = 0; i < N; i+=1) {
    arr.push(i);
  }
  
  return arr;
};

//[8kyu] Convert a String to a Number!
var stringToNumber = function(str){
  // put your code here
  return +str 
 // ===  Number(str) || parseInt(str);
}

//[8kyu] Find Multiples of a Number
function findMultiples(integer, limit) {
  //your code here
  
  const arr = [];
  
  for (let i = 1; i <= limit; i += 1) {
    
      if (integer * i <= limit) {
        arr.push(integer * i);
      }
  }
  return arr;
}

//[8Kyu] I love you, a little , a lot, passionately … not at all
function howMuchILoveYou(nbPetals) {
  // your code
const arr = [
   "I love you",
   "a little",
   "a lot",
   "passionately",
   "madly",
   "not at all",
 ];

for (let i = 0; i <= nbPetals-1; i += 1) {
  
  if (i === nbPetals-1) {
    return arr[i%6];
  }
}
}

//[8kyu] Switch it Up!
function switchItUp(number){
  var words = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
  return words[number];
}

//[8kyu] Super Duper Easy
const problem = x => typeof x === 'string' ? 'Error' : x * 50 + 6;

//[8kyu] Will there be enough space?
function enough(cap, on, wait) {
  return Math.max(wait + on - cap, 0)
}

//[8kyu] Filter out the geese
function gooseFilter (birds) {
  const geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  
  return birds.filter((elm) => !geese.includes(elm))
};
/* dont do
// [8kyu] Cat years, Dog years
var humanYearsCatYearsDogYears = function(humanYears) {
  // Your code here!
  if (humanYears === 1) {
    return [1, 15, 15];
  }
  if (humanYears === 2) {
    return [2, 24, 24];}    
  
  return [humanYears, 24+((humanYears-2)*4), 24+((humanYears-2)*5)];
} */

// [8kyu] Generate range of integers
function generateRange(min, max, step){
  const arr = [];
  
  for (let i = min; i <= max; i += step) {
    arr.push(i);
  }
  
  return arr;
}

// [8kyu] Do you speak “English”?
function spEng(sentence){
  //write your code here
    const reg = /english/i;
    
    return reg.test(sentence);
  }
 
  //[8kyu] Removing Elements

  function removeEveryOther(arr){
    let newArr=[];
  for (let i = 0; i < arr.length; i+=2){
    newArr.push(arr[i]);
    }
  return newArr;
  }

  //[8kyu] Tip Calculator
  function calculateTip(amount, rating) {
    const raingName = rating.();
    
    switch (raingName) {
        case "EXCELLENT":
          return Math.ceil(amount * 0.2);
        
        case "GREAT":
          return Math.ceil(amount * 0.15);
        
        case "GOOD":
          return Math.ceil(amount * 0.1);
        
        case "POOR":
          return Math.ceil(amount * 0.05);
        
        case "TERRIBLE":
          return Math.ceil(amount * 0);
        
        default:
          return "Rating not recognised"
    }
  }

  //[8kyu] Returning Strings

  function greet(name){
    //your code here
    return `Hello, ${name} how are you doing today?`;
  }

  //[8kyu] Get the mean of an array
  function getAverage(marks){
   
    let total = 0;
    for(let i = 0; i < marks.length; i++){    // calculates total number of marks
      total += marks[i];
    }
    
    /* returns total number of marks divided by number of marks
       rounded down to nearest integer */
    return Math.floor(total / marks.length);
  }

  // [8kyu] N-th Power

function index(array, n){
  //your code here
  if (array.length <= n || 0 > n) {
    return -1;
  } else {
    return Math.pow(array[n], n);
  }
}

//[8kyu] Parse float

function parseF(s) {
  
  if (typeof s === 'boolean' || typeof s === 'undefined') {
    return null;
  } else if (isNaN(Number(s))) {
    return null;
  } else {
    return Number(s);
  }
}
/**************************************** */
// [8kyu] No zeros for heros
// 1.
function noBoringZeros(n) {
  const numStr = String(n).split('');  // put the string to array 
  // your code
  
  if (n === 0) {        // if its an emty string
    return 0;
  }
  
  for (let i = numStr.length-1; i >= 0; i -= 1) {  // run from the end of the string
    
    if (numStr[i] !== '0') {
      return +(numStr.slice(0, i+1).join(''));
    }
  }
}
//.2
// Answer 1
function noBoringZeros(n) {
  while (n % 10 === 0 && n !== 0) {
    n = n / 10
  }
  return n
}
// Answer 2
function noBoringZeros(n) {
  return +`${n}`.replace(/0*$/, "");
}

/* ******************************************/
// [8kyu] Hello, Name or World!
function hello(name) {
  if (typeof name === "undefined" || name.length === 0) {
    return `Hello, World!`;
  } 
  else {
    return `Hello, ${name[0].()}${name.substr(1,).toLowerCase()}!`;
  }
}

//[8kyu] Grasshopper – Grade book
function getGrade (s1, s2, s3) {
  // Code here
  const avg = (s1 + s2 + s3) / 3;
  
  if (avg >= 90) {
    return 'A';
  } else if (avg >= 80) {
    return 'B';
  } else if (avg >= 70) {
    return 'C';
  } else if (avg >= 60) {
    return 'D';
  } else {
    return 'F';
  }
}

// [8kyu] Is the string uppercase?
String.prototype.isUpperCase = function() {
  // your code here
  const re = /([a-z]+)/g;
  return !re.test(this);
}

// Answer 1
String.prototype.isUpperCase = function() {
  return this==this.()
}
// Answer 2
String.prototype.isUpperCase = function() {
return this.() === this.toString();
}

// [8kyu] Get Planet Name By ID
function getPlanetName(id){
  var name;
  switch(id){
    case 1:
      name = 'Mercury';
      break;
    case 2:
      name = 'Venus';
      break;
    case 3:
      name = 'Earth';
      break;
    case 4:
      name = 'Mars';
      break;
    case 5:
      name = 'Jupiter';
      break;
    case 6:
      name = 'Saturn';
      break;
    case 7:
      name = 'Uranus';
      break;
    case 8:
      name = 'Neptune';
      break;
  }
  
  return name;
}

// [8kyu] Smallest unused ID
function nextId(ids){
  const arr = ids.filter((item, pos, self) => self.indexOf(item) === pos).sort((x, y) => x-y);
  
  if(arr[0] !== 0) {
    return 0;
  }
  
  for(let i = 0, j = 1; i <= arr.length; i += 1, j += 1) {
    if(arr[i]-arr[j] !== -1) {
      return arr[i]+=1;
    }
  }
}

// Answer 1
function nextId(ids){
  const used = new Set(ids);
  for (let i = 0; i <= ids.length; i++) {
    if (!used.has(i)) return i;
  }
}
// Answer 2
 function nextId(ids){
  var x = 0;
  while (ids.includes(x)) x++;
  return x;
}
// Answer 3
function nextId(ids){
  for (i = 0; i < ids.length; i++) { 
    if (ids.indexOf(i) == -1){
      return i;
    }
  }
  return ids.length;
}

// [8kyu] Abbreviate a Two Word Name
//Example:
//Sam Harris => S.H
//Patrick Feeney => P.F
//Answer:
function abbrevName(name){
  const nam = name.split(' ');
  return `${nam[0].charAt(0).()}.${nam[1].charAt(0).()}`;
}
//Other:
function abbrevName(name){
    return name.split(' ').map(i => i[0].()).join('.')
}

//[8kyu] Triple Trouble
Answer:
function tripleTrouble(one, two, three){
    const arr = [];
    
    for(let i = 0; i < one.length; i += 1) {
        arr.push(one[i], two[i], three[i]);
    }
    
    return arr.join('');
 }
Other:
// Answer 1
function tripleTrouble(one, two, three) {
  var result = "";
  for (let i = 0; i < one.length; i++) {
    result += one.charAt(i) + two.charAt(i) + three.charAt(i);
  }
  return result;
}
// Answer 2
function tripleTrouble(one, two, three){
  let x = ''
    for(i = 0; i<one.length; i++) {
      x +=  one[i] + two[i] + three[i]
    }
  return x
 }
// Answer 3
const tripleTrouble = (one, two, three) => one.split("").map((letter, index) => letter + two[index] + three[index]).join("");


// [8kyu] Reversed sequence
Answer:
const reverseSeq = n => {
  const result = [];
  
  for(let i = n; i > 0; i -= 1) {
    result.push(i);
  }
  
  return result;
};
Other:
const reverseSeq = n => {
  return Array(n).fill(0).map((e, i) => n - i );
};

//[8kyu] get ascii value of character
function getASCII(c){
  return c.charCodeAt();
}

//[8kyu] Take the Derivative
/*
Example:
derive(7, 8)
In this case, the function should multiply 7 and 8, and then subtract 1 from 8. It should output "56x^7", the first number 56 being the product of the two numbers, and the second number being the exponent minus 1.

derive(7, 8) --> this should output "56x^7" 
derive(5, 9) --> this should output "45x^8" 
Note:
The output of this function should be a string
The exponent will never be 1, and neither number will ever be 0 */
Answer:
function derive(coefficient,exponent) {
  return `${coefficient * exponent}x^${exponent-1}`
}

// [8kyu] Square(n) Sum
//Example:
//for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.
//Answer:
function squareSum(numbers){
  return numbers.map((num) => Math.pow(num, 2)).reduce((x, y) => x + y, 0);
}
//Other:
// Answer 1
function squareSum(numbers){
  return numbers.reduce(function(sum, n){
    return (n*n) + sum;
  }, 0)
}
// Answer 2
function squareSum(numbers){
  var sum = 0;
  numbers.forEach(function(n) {
    sum += n * n
  });
  return sum;
}

//  [8kyu] Total amount of points
//Answer:
function points(games) {
  let point;
  const result = games.map((num) => {
     if(Number(num.charAt(0)) > Number(num.charAt(2))) {
       return point = 3;
     }else if(Number(num.charAt(0)) === Number(num.charAt(2))){
       return point = 1;
     }else {
       return point = 0;
    }
  })
  
  return result.reduce((x, y) => x + y);
}
Other:
// Answer 1
const points=games=>games.reduce((output,current)=>{
    return output += current[0]>current[2] ? 3 : current[0]===current[2] ? 1 : 0;
  },0)
// Answer 2
function points(games) {
  let total = 0;
  games.map(game => {
    if (game[0] === game[2]) {
      total += 1;
    } else if (game[0] > game[2]) {
      total += 3;
    }
  });
  return total;
}


//[8kyu] Beginner Series #1 School Paperwork
function paperwork(n, m) {
  if (n < 0 || m < 0) {
    return 0
  } else {
    return n * m;
  }
}
Other:
function paperwork(n, m) {
 return n > 0 && m > 0 ? n * m : 0
}


//[8kyu] Sum of positive

Answer:
function positiveSum(arr) {
  if(arr.length === 0 || arr[0] === undefined) {
    return 0;
  } else if (arr.filter((num) => Math.sign(num) > 0).length === 0) {
    return 0
  } else {
    return arr.filter((num) => Math.sign(num) >= 0).reduce((x, y) => x + y);
  }
}
Other:
// 1
function positiveSum(arr) {
  var total = 0;    
  for (i = 0; i < arr.length; i++) {    
  // setup loop to go through array of given length
    if (arr[i] > 0) {                   
    // if arr[i] is greater than zero
      total += arr[i];                  
     // add arr[i] to total
    }
  }
  return total;                        
  // return total
}
// 2
function positiveSum(arr) {
   return arr.reduce((a,b)=> a + (b > 0 ? b : 0),0);
}
// 3 
function positiveSum (arr) {
  return arr.filter(x => x>=0).reduce((a, c) => a + c, 0);
}

//   [8kyu] Array plus array

function arrayPlusArray(arr1, arr2) {
  return arr1.concat(arr2).reduce((a, b) => a + b);
}





