
/*
Write a function that has one argument, a positive integer. 
Lets call it N.
The function should console log a step shape.
With N levels using the # character. Make sure the step has
spaces on the right hand side if empty!
*/
/*
function drewsteps(N){
    let i,j;
    //let result = [];
    for(i=1;i<N+1;i++){
       // for(j=0;j<i;j++){
            console.log("#")
        }
       // console.log("  \n")
        
    //}
}
N=3;
drewsteps(N);*/
function steps(n) {
    let stair;
    for (let row = 0; row < n; row++) {
        stair = '';
        for (let column = 0; column < n; column++) {
            if (column <= row) {
                stair += '#';
            } else {
                stair += ' ';
            }
        }
        console.log(stair);
    }
}

//steps(1);
steps(4);
