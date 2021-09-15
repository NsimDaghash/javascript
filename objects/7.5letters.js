
const letters = {};

const array = ["Hello", "Good Day", "Your Welcome", "hotdog", "hamburgers"];
let ltr="", amount=1;
tmpstr="";

const lettersUtils={
    setnewltr:function(letters,id){
        return ((letters.language = language) && (letters.amount = amount)); 
    }
}

for (i=0;i<array.length;i++){
    str = array[i].toLowerCase();
    tmpstr = tmpstr+str;
    tmpstr.split(" ");
    console.log(tmpstr)

}
console.log(tmpstr);

function countChars(tmpstr) {
    return tmpstr
      .split('')
      .reduce((map, char) => {
       return {
          ...map,
          [char] : (map[char] || 0) + 1
        };
    }, {});
  }
  console.log(countChars(tmpstr));

console.log(letters); 

