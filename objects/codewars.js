function between(a, b) {
    let list=[];
    // your code here
    console.log(a);
    console.log(b);
    if (a > b) {
      for (let i = a; i <= b; i++) 
        list.push(i);
      }
    else{
        for (let i = b; i <= a; i++) 
        list.push(i);
    }
    console.log(list);
  }

  between(1,4);