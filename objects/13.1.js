
function printNeighbours(listOfNeighbours){
   let i,j;
   for(i=0;i<listOfNeighbours.length;i++){
       for(j=0; j<listOfNeighbours[i].length ;j++){
           console.log("Neighbours :" ,listOfNeighbours[i][j]);
       }
   }
}

const listOfNeighbours = [
    ["Canada", "Mexico"],
    ["Spain"],
    ["Norway", "Sweden", "Russia"],
   ];


   printNeighbours(listOfNeighbours);