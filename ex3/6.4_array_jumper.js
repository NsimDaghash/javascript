
function avgJumper(arr){
    let i ,j,k=0; avg1=0, avg = 0;
    let arr1=[];
    for (i=0,j=1;i<arr.length;i++,j++){
        if (arr[i] > 0){            
            if ((j%3) == 0){
                avg=avg+arr[i];
                k++;
                avg1=avg/k;
                arr1.push(avg1);
                avg=0;
                k=0;
            }
            else{
                avg=avg+arr[i];
                k++;
            }  
        }      
    }
    return(arr1);
}

function bestAvgJump(arr2){
    let i=0,max=0;
    for (i=0;i<arr2.length;i++){
        if(arr2[i]>max){
            max=arr2[i]
        }
    }
    return max;
}
function bestJump(arr){
    let i=0,best=0;
    for (i=0;i<arr.length;i++){
        if(arr[i]>best){
            best=arr[i]
        }
    }
    return best;
}


let arr= [5,5,8,7,-1,5,8,3,6,9,-1,6];
let arr2 = avgJumper(arr);
console.log(arr2);
//console.log(avgJumper(arr));
console.log('best avg :',bestAvgJump(arr2));
console.log('best jump:',bestJump(arr));