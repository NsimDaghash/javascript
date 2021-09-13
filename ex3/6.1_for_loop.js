const arr=[1,7,3,0,-5,7,3,9]

for(i=0;i<arr.length;i++)
{
    console.log(arr[i]);
    }

function arrayLenght(arr)
{
    let i=0;
    arr.forEach(element => {
        i++;
    });
    console.log('array lenght:',i);
}

function arraySum(arr){
    let j=0 ;
    for(i=0;i<arr.length;i++){
        j=j+arr[i];
    }   
   console.log('array sum:',j);
}

function arrayMulti(arr){
    let j=1 ;
    for(i=0;i<arr.length;i++){
        j=j*arr[i];
    }   
   console.log('array multiplication:',j);
}

arrayLenght(arr);
arraySum(arr);
arrayMulti(arr);

