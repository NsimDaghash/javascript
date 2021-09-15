
let user = {
    name: "John",
    age: 30
  };
 
console.log(user);
function swap(user){
    let ret = {};
    for(let key in user){
      ret[user[key]] = key;
    }
    return ret;
    
  }

  //console.log(swap(user));
  console.log(swap(user));