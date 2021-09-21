const food = ["Noodle", "Pasta", "Ice-cream", "Meat","Cucumber", "Olives"];
const food1 = ["Fries", "Ice-cream", "Pizza", "Olives","Hamburgers"];

function compare(food,food1){
    let i,j,count=0;
    let result = [];
    for(i=0;i<food.length;i++){
        for(j=0;j<food1.length;j++){
            if (food[i] === food1[j]){
                result[count] = food[i];
                count++;
            }
        }
        
    }
    if (count>0){
        return result;
    }
    else{
        return false;
    }
}

console.log(compare(food,food1));