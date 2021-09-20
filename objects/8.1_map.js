let set1 = {
    Name : 'name1'
};
let set2 = {
    Name : 'name2'
};
let set3 = {
    Name : 'name3'
};

let NewOpject = new Map();

NewOpject.set(set1,'1');
NewOpject.set(set2,'2');
NewOpject.set(set3,'3');
/* 
the objects set1,set2,set3 become the key to access aproperity need to do 
*/
for(let [Name,value] of NewOpject)
    console.log(Name.Name+ ':' + value);


//Create 3 separate objects that their key is called name and their value is a string. Store them in separate variables//
book1 = {
    name: 'book1'
}
book2 = {
    name: 'book2'
}
book3 = {
    name: 'book3'
}
//Create a new Map object that sets each object as a key and assign an id number as the value//
let book=new Map();
book.set(book1,1);
book.set(book2,2);
book.set(book3,3);

//Iterate over the Map object with the for..of loop - log the name and id//
for (let [key,value] of book){
    console.log(key+':'+ value)
}

