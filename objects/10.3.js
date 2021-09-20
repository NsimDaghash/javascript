const data = [
    {
    name: "John",
    birthday: "1-1-1995",
    favoriteFoods: {
    meats: ["hamburgers", "sausages"],
    fish: ["salmon", "pike"],
    },
    },
    {
    name: "Mark",
    birthday: "10-5-1980",
    favoriteFoods: {
    meats: ["hamburgers", "steak", "lamb"],
    fish: ["tuna", "salmon", "barracuda"],
    },
    },
    {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
    meats: ["ham", "chicken"],
    fish: ["pike"],
    },
    },
    {
    name: "Thomas",
    birthday: "1-10-1990",
    favoriteFoods: {
    meats: ["bird", "rooster"],
    fish: ["salmon"],
    },
    },
    {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
    meats: ["hamburgers", "lamb"],
    fish: ["anchovies", "tuna"],
    },
    },
   ];
   

   // 1.  Create a function that returns all the names from the array.
   
   function names(data){
    const result = data.map((n) => n.name);
    console.log(result);
    
   }

   names(data);

  //  2. Create a function that returns all the objects that are born before 1990.
  
  function birth(data){
      let i = 0 ;
    const result = data.map((n) => n.birthday);
    let newarr  = [],born =[];
    result.forEach(function (num){        
        newarr=num.split('-'); 
        if(+newarr[2] < 1990){
            born.push(data[i]);            
        }
        i++ ;
    //console.log (arr);    
});

    console.log(born);
   }

birth(data);

  /*
3. Create a function that returns an object of all the different foods from all 
the objects as the key and the number of times that food is present in all the 
objects as the value. */

function food(upsidedown){
    let obj1={} , res=[];
    const result1 = data.map((n) => n.favoriteFoods.meats+","+n.favoriteFoods.fish).join(',').split(",");
    result1.map(function(val){ return obj1[val] = (result1.filter(function(v){return(v==val) })).length});
    console.log(obj1);
    return obj1;


}

food(data);