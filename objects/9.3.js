const foods = ["apple", "cupercalifragilisticexpialidocious","hi", "zoo","dood"];

// // let sortFood = foods.sort();
// // console.log(sortFood);

for(let j=0 ; j < foods.length ; j++){
    for(let i=0 ; i < foods.length-1 ; i++){
        console.log("foods[i][0] :",foods[i]);
        console.log("foods[i][1] :",foods[i+1]);
        if(foods[i][0] > foods[i+1][0]){
             let temp = foods[i];//angus
             foods[i] = foods[i+1]
             foods[i+1]=temp;
        }
      }
}

console.log("foods: ",foods);
/*
//9.3.b
const sortedDescendingUpperCase = foodsWithUpperCase.sort((a, b) => {
    let x = a.toLowerCase();
    let y = b.toLowerCase();
    if (x < y) return 1;
    if (x > y) return -1;
    return 0;
  });
*/
  9.3.c 
  const words = ["apple", "supercalifragilisticexpialidocious",
"hi", "zoo"];
function sortByLength (array) {
    return array.sort((x,y) => y.length - x.length);
}
console.log(sortByLength(words));

  