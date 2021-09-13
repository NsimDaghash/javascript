function boom(num){
    let i,j;
    for (i=1;i<=num;i++){
        j= ''+i;
        if ((j.indexOf('7')!= -1) && ((i%7)==0)) {
            console.log('BOMM-BOOM');
        }
        else if (((i%7)==0) || (j.indexOf('7')!= -1)){
            console.log('BOMM');
        }
        else {
            console.log(j);
        }
    }

}

boom(28);
