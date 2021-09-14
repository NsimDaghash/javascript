
const mycountry={
    country : 'israel',
    capital : 'jerusalim',
    language: 'hebrow' ,
    population :' 9 million' ,
    neighbours : ['egypt','jordan','syria','Lebanon'],
    }

mycountry.describe =function(){
    console.log(`${this.country} has ${this.population} people, there mother tongue is ${this.language} they have ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`);
}

mycountry.describe();
