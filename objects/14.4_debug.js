function calcAverage (arr){
    var sum=0 ;
    for ( var i = 0 ; i < arr.length; i ++ ){
    sum += arr [ i ];
    }
    return sum ;
    }
   console.log(calcAverage ([ 85 , 90 , 92 ]));

   // line 2 : the sum variable  is not defined needed to be initialized 