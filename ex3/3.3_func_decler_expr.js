function percentageOfWorld1(population){
    return((population/7900)*100);
}

let ch_per , is_per , ej_per;
 
let china = 1441;
let china1 = 1441 ;
let israel = 9 ;
let ejypt = 100 ;

ch_per=percentageOfWorld1(china);
console.log(ch_per);
is_per=percentageOfWorld1(israel);
console.log(is_per);
ej_per=percentageOfWorld1(ejypt);
console.log(ej_per);

let ch_per11 = function(china1){
    return((china1/7900)*100);
};
console.log(ch_per11(china1));


let is_per1 = function(israel){
    return((israel/7900)*100);
};
console.log(is_per1(israel));

let ej_per1 = function(ejypt){
    return((ejypt/7900)*100);
};
console.log(ej_per1(ejypt));

