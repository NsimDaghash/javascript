const candyStore = {
    candies: [
    {
    name: "mint gum",
    id: "as12f",
    price: 2,
    amount: 2
    },
    {
    name: "twix",
    id: "5hd7y",
    price: 5,
    amount: 4
    },
    ],
    cashRegister: 200
   }
   
   function getCandy(candyStore, id){      
        let i;
        let specified_candy = {};                               /* the item choosen by id */
        for (i=0;i<candyStore.candies.length;i++){
            if((candyStore.candies[i].id) === id)
                specified_candy=candyStore.candies[i];
        }
            return specified_candy;
    } 

    function getPrice(candyStore, id){ 
        let i;
        let specified_candy = {};
        for (i=0;i<candyStore.candies.length;i++){
            if((candyStore.candies[i].id) === id)
                specified_candy=candyStore.candies[i];
        }
            return specified_candy.price;
    } 
    function addCandy(candyStore, id, name, price){
            let product={
                name: name,
                id: id,
                price: price,
                amount: 1,
            };
            candyStore.candies.push(product);
            return (candyStore);
        }

    function buy(candyStore, id){
        let i;
        let specified_candy = {};
        for (i=0;i<candyStore.candies.length;i++){
            if((candyStore.candies[i].id) === id)
                specified_candy=candyStore.candies[i];
        }
           // return specified_candy.price;
            candyStore.cashRegister = candyStore.cashRegister + specified_candy.price;
            specified_candy.amount = specified_candy.amount - 1;
            return (candyStore);
    }  
      
        

    console.log(getCandy(candyStore,"as12f"));
    console.log(getPrice(candyStore,"as12f"));
    console.log(addCandy(candyStore,'8c19b','Mars',3));
    console.log(candyStore);
    buy(candyStore, '8c19b');
    console.log(candyStore);

