/*
--Delete the wrong answers--

1. Which of the following is/are strings?  

c) '4'   

2. Which of the following is/are numbers? 

a) 4
b) 4.0
d) -4

3. Which of the following is/are booleans? 

a) true
b) false

4. What is the result of 80 + 71.2?

a) 151.2

5. What is the result of "80" + 71.2?  

c) "8071.2"

6. Does 100 + 30 produce a number or a string?  number

a) number

7. Does "100" + 30 produce a number or a string?  string

b)string

*/

//------Submit your answers under the question------//

//create three different ways to declare variables
let x ;
const y=0;
var z ;

//declare a variable and reassign a value to it
let d;
d=5;
//create a variable and after that assign a string with its value being: He's got it!
let str;
str="He's got it!"
/*
1. create a variable and assign a value on how much a restaurant bill is.
2. create a variable and assign a value on how much tax they should pay.
3. create a variable that will calculate the bill * tax and its output would be: Your total bill is <total bill> $.
 */
let r_bill = 100 ;
let pers = 17;
let tax = (r_bill * pers)/100 + r_bill;
console.log("Your total bill is:",tax)

// Round the number 50.6 to its nearest integer
let num = 50.6 ;
new_num= Math.round(num);
console.log(new_num)
//Create a variable that is undefined
let number ;
