
function leapyear(year){
    if (year % 400 === 0){
        console.log(' leap year');
    }
    else if (year % 100 === 0) {
        console.log('not a leap year');
         }
         else if (year % 4 === 0){
            console.log('leap year');
         }
         else{
             console.log ('not a leap year');
         }
        }
    
leapyear(1998);
leapyear(2016);
leapyear(2100);
leapyear(2000);
leapyear(2222);

