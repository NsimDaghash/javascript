/* to count numbers
const occurrences = [5, 5, 5, 2, 2, 2, 2, 2, 9, 4].reduce(function (acc, curr) {
    return acc[curr] ? ++acc[curr] : acc[curr] = 1, acc
  }, {});
  
  console.log(occurrences)  */
/* ******************************************** */
/* to count chars*/
  //function to print occurrence of character
function printans( ans )
{
  for( let [ key ,value] of ans)
  {
    // if()
    console.log(`${key}  ocuurs  ${value} times` );
       
  }
 
}
 
// function count occurrence of character
function count( str , outp_map )
{
  for( let i = 0 ;i < str.length ;i++)
  {
 
    let k = outp_map.get(str[i]);
    outp_map.set(str[i], k+1) ;
         
     
  }
  //calling  print function
  printans(outp_map);
}
 
//function create map to count character
function count_occurs( test , callback )
{
  //checking string is valid or not
  if( test.length === 0 )
  {
    console.log(" empty string ");
    return ;
  }
  else
  {
    // map for storing count values
    let ans = new Map();
    for( let i = 0 ;i < test.length;i++)
    {
      ans.set(test[i], 0);
    }
     
    callback( test ,ans);
     
  }
 
}
 
// test string
/*
let test =  "helloworld";
count_occurs( test ,count);

*/
const array = ["Hello", "Good Day", "Your Welcome", "hotdog", "hamburgers"];
 let arr=[];
 
for (i=0;i<array.length;i++){

    arr[i] = array[i].toLowerCase();
    console.log(arr[i]);
    count_occurs( arr[i] ,count);
}
