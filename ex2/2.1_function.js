function describeCountry(country,population,capitalCity)
{
    let str;
   // str=country + " has "+ population + " people and its capital city is "+capitalCity;
    str =`${country} has ${population} people,and its capital city is ${capitalCity}`;
    return(str) ;

}

let country1 , country2 ,country3;

country1=describeCountry('finland','6 million','helsinki');
country2=describeCountry('israel','9 million','jerulasim');
country3=describeCountry('bulgaria','15 million','sofia');

console.log(country1);
console.log(country2);
console.log(country3);
