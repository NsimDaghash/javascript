array = [2 ,9 ,7,3 ,8 ,4,1]

function getMax(array){
   // return data.reduce((max, b) => Math.max(max, b.y), data[0].y);
    return array.reduce((max, p) => p > max ? p : max);
  }

const sumEvens = arr => arr.filter(e => !(e % 2)).reduce((a, b) => a + b);
function getAvg(array){
    // return data.reduce((max, b) => Math.max(max, b.y), data[0].y);
    const sum = array.reduce((a, b) => a + b);
    return(sum/array.length) ;
   }

console.log("the sum of the even numbers:" ,sumEvens(array));
console.log("the maximum :" ,getMax(array));
console.log("the Average :" ,getAvg(array));