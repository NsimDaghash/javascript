/*
function power(n) {
    let i,j;
    let result;
    for (i=0; i<n; i++){
        if(i=0){
            result = a.pow(n)
        }
        j=0;
        result =+ b.pow(j)*a.pow(n)
    }
    return result;
}

//console.log(power(2,4));
console.log(power(5));

*/
/*
function reverseInPlace(str) {
    var words = [];
    words = str.match(/\S+/g);
    var result = "";
    for (let i = 0 , j= words.length ; i < words.length; i++ ,j--) {
             result[j]= words[i];
             console.log(words[i]);
            // console.log(result[j]);
      //  result += result[j];
    }
    return result
  }*/
  /*
  function reverse(s) {
    var o = '';
    for (var i = s.length - 1; i >= 0; i--)
      o += s[i];
    return o;
  }*//*
  function reverse(s){
    return s.split(" ").reverse().join(" ");
}
  console.log(reverse("abd fhe kdj"))
  */
/*
  Array.min = function( array ){
    return Math.min.apply( Math, array );
};
*/
//class SmallestIntegerFinder {
    /*
function findSmallestInt(args){
      let tmp = args[0] ;
      for(let i=0 ;i < args.length;i++){
        if((args[i]) < tmp){
          tmp=args[i];
        }
      }
      return tmp;
    }
  //}

  console.log(findSmallestInt([78,56,232,12,8]));
*/
function add(a,b){
    return (a+b);
}

function divide(a,b){
    return (a/b) ;
}

function multiply(a,b){
    return a*b;
}

function mod(a,b){
    return a%b ;
}
   
function exponent(a,b){
    return a^b;
}
    
function subt(a,b){
    return (a-b);
}
console.log(add(1,2));
console.log(divide(2,1));
console.log(multiply(1,2));
console.log(mod(1,2));
console.log(exponent(1,2));
console.log(subt(1,2));

