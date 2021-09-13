function odd_even(n){
    if(n%2 === 0)
    return true ;
}

let number

function threenum(number) {
    v=number%10;
    odd_even(v);
}

function everge( num1,num2){
    return((num1+num2)/2);
}

function max3( num1,num2,num3){
    if(num1>num2)
        if(num1>num3)
            return (num1);
        else
            return(num3);
    else
        if(num2>num3)
            return num2 ;
        else
            return num3 ;
}
function maxBetweensex(num1,num2,num3,z,x,r) {
    let d,s ;
    d=Math.max(num1,num2,num3);
    s= Math.max(z,x,r);
    return(Math.max (d,s));

}