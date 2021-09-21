function findSmallest(a, b, c){
    if (a > b &&  c> b){
    return b;
    } else if (a > c && b > c) {
    return c;
   } else {
    return a;
    }
   }
   console.log(findSmallest(52,66, 2));
   

   // line 10 : findSmalest is not defined .
   // line (2 + 4 +7) : wrong conditions .
