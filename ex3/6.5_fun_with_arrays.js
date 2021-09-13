/* fill an array with 100 cells the same content */
let Array1 = Array(100).fill("hi",0);
console.log(Array1) ; 

/*2. Create an array with numbers ranging from 1-100 using the Array.from method.  */

function range(start, end) {
    return Array(end - start + 1).fill().map((_, idx) => start + idx)
  }
  var result = range(1, 100);
  console.log(result); 

/* 3. Convert only values of an object into one array.   */
  const person = {
    firstName: 'John',
    lastName: 'Smith'
};
/* To convert property’s names of the person object to an array, you use the Object.keys() method: */
const propertyNames = Object.keys(person);
console.log(propertyNames);
/*To convert property’s values of the person object to an array, you use the Object.values() method:  */
const propertyValues = Object.values(person);
console.log(propertyValues);
/*   4.Convert an array into one object  */ 
let arr=['a', 'b', 'c'] ;
function toObject(arr) {
    let rv = {};
    for (var i = 0; i < arr.length; ++i)
      rv[i] = arr[i];
    /* return rv;*/
    console.log(rv);
  }

toObject(arr);
/* Find out if an array is an array. */
let arr5=[];
let x;

console.log(Array.isArray(arr5));
console.log(Array.isArray(x));


/* 6. Copy an array. */
/*  Create a copy of an array that won’t effect the original array if modified.  */
let myArray= [10,5,9,8,7];
let copyOfMyArray = myArray.slice(0);

copyOfMyArray.push(17);
console.log(myArray);
console.log(copyOfMyArray);

/*  Create a copy of an array that will effect the original array if modified.  */
let myarr =  [10,5,9,8,7];
let copymyarr = myarr;

myarr.push(19);

console.log(myarr);
console.log(copymyarr);
