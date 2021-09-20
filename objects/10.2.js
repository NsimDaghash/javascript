let str1=" I'm programming javascript for fun and more knowladge ";
/* 1. Write a function called doubleValues which accepts an 
array and returns a new array with all the values in the 
array passed to the function doubled. */
let numbers = [1, 4, 9, 5, 7, 6, 3, 10, -2, -5, -4, 0 , -11]
let doubleValues = numbers.map(function(num) {
    return (num*2)
})
console.log(doubleValues);
/*
2. Write a function called onlyEvenValues which accepts an 
array and returns a new array with only the even values in 
the array passed to the 
*/
console.log("With forEach")
let newarr  = []
 numbers.forEach(function onlyEvenValues(num){
    if(num %2 == 0)
        newarr.push(num)
    //console.log (arr);    
});

console.log(newarr);

/*
3. Write a function called showFirstAndLast which accepts 
an array as an argument and returns a new array with only 
the first and last elements from the function’s argument 
array. The returned array should only contain elements that
are strings. */
function showFirstAndLast(array) {
let tmp = array.map((content)=> {
    if (typeof(content) == 'string')
        return content ;
    });
    let long = tmp.length;
    tmp = [tmp[0],tmp[long-1]];
    return(tmp)
}

array=["text",5 , [1,2], 'test' ,"good"];
console.log (showFirstAndLast(array));
/*
4. Write a function called vowelCount which accepts a 
string as an argument. The function should return an object
which has the count of the number of vowel’s that are in 
the string. The key should be the vowel and the value 
should be the count. e.g. {a:3, o:2,u:4}.
Should not be case sensitive.*/

function vowelCount(str)
{
  //splits the vowels string into an array => ['a','e','i','o','u','A'...]
  let arr_vowel_list = 'aeiouAEIOU'.split(''); 

  
  let count = 0 , obj={} ,arr=[];
  str.toLowerCase();
  /*for each of the elements of the splitted string(i.e. str), the vowels list would check 
    for any occurence and increments the count, if present*/
  str.split('').forEach(function(element){
  if(arr_vowel_list.indexOf(element) !== -1){
   count++;} });

   //and now log this count
   return("the vowel count :", count);
}
//Function Call
console.log(vowelCount(str1));


/*
5. Write a function capitalize that takes a string as an 
argument and will return the whole string capitalized.
*/
function capitalize(str)
{
    let result = '';
    str.split('').forEach(function(element){
        let charCode = element.charCodeAt(0);
        if ( charCode > 96 && charCode <123 ){
            result += String.fromCharCode(charCode - 32);;
        }
        else{
            result += element;
        }
    });
   // console.log("caitalized:", result);
    return result;
}

console.log(capitalize(str1));

/*
6. Write a function called shiftLetters that takes a string as 
an argument and return’s an encoded string with each 
letter shifted down the alphabet by one. */
function shiftLetters(str)
{
    let result = '';
    str.split('').forEach(function(element){
        let charCode = element.charCodeAt(0);
  //      if ( charCode > 96 && charCode <123 ){
            result += String.fromCharCode(charCode - 1);;
    /*    }
        else{
            result += element;
        }*/
    });
   // console.log("shift Letters:", result);
    return result;
}
//let str1=" I'm Programming javascript  "
console.log(shiftLetters(str1));

/*

7. Create a function called swapCase that takes a string as 
an argument and returns a string that every other word is 
capitalized. (you can use the fifth’s exercise's function to 
keep it dry
*/

function swapCase(str){
    let newstr = str.split(" ");
    let finalstr= '';
    for (i=0;i<newstr.length;i++)
    {
        if(i%2 != 0){
        newstr[i]  = capitalize(newstr[i]);
        finalstr = finalstr +" "+ newstr[i]  ;
        }
    else
    {
        finalstr = finalstr +" "+ newstr[i]  ;
    }    
    }
  return(finalstr);
}


console.log(swapCase(str1));


