/*1. Write a a function called ‘isString’ that receives 2 
arguments, a string and a callback function.
The function checks that the string is indeed a string.
If the string is a string, pass the string to a callback 
function which logs that string to the console. */

function isString(str ,callback ){
    if (typeof(str) == "string")
        callback(str);
}

function callback(str){
    console.log(str);
}

let str = "hello" ;
isString(str ,callback );

/*-
2. Create a function called ‘firstWordUpperCase’ that 
receives 2 arguments, a string and a callback function.
The function will capitalize the first word in the sentence 
and pass the string to a callback function which will create 
dashes between the words. */

function firstWordUpperCase(str1 ,callback1){
    let newstr = str1.split(' ');
    newstr[0] = newstr[0].toUpperCase();
    callback1(newstr);

}

function callback1(newstr){
    newstr = newstr.join('-');
    console.log(newstr);
}

str1 = "hello world"
firstWordUpperCase(str1 ,callback1);

