const people = ["Greg","Mary","Devon","James"];

//4.
people.unshift("Matt");
//5.
people.push("Nasim");
//3.
people.pop();
//2.
people.shift();
// 1.
for(i=0;i<people.length;i++)
{
    console.log(people[i]);
    }
//6.
for(i=0;i<people.length;i++)
{
    console.log(people[i]);
        if (people[i] === 'Mary') {
        return false;
    }
}
//7.
arr1=people.slice(1,2);
arr2=people.slice(3,6);
arr3=arr1+','+arr2;
console.log(arr3);
//8.
console.log(people.indexOf('Mary'));
//9.
console.log(people.indexOf('Foo'));
//10.
arr1=people.slice(0,2);
arr1.push("Elizabeth");
arr1.push("Artie");
arr2=people.slice(3,6);
arr3=arr1+','+arr2;
console.log(arr3);
//11.

let withBob = people.slice(0);
for (i=0; i<withBob.length;i++){
    withBob[i] = withBob[i]+"Bob";
}
console.log(withBob);