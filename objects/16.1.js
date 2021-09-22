
//1.

var b = 1;
function someFunction(number) {
 function otherFunction(input) {
 return b;
 }
 b = 5;
 return otherFunction;
}
var firstResult = someFunction(9);
var result = firstResult(2);

//otherFunction will return 5 to the  someFunction that return it to firstResult (line 9) that return it to result (line 10)

// 2. 

var a = 1;
function b2() {
 a = 10;
 return;
 function a() { }
}
b2();
console.log(a);

// the result will be 1 couse the a variable will be changed localy in function b2 to 10 , and when it will get out from the functiion it will get the global value (1);

// 3.

//let i;
for (let i = 0; i < 3; i++) {
 const log = () => {
 console.log(i);
 }
 setTimeout(log, 100);
}