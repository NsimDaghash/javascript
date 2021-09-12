function circleArea(radius) {
    let area = Math.PI * (radius * radius);
    return (area);
}
 
 let answer;
 
 answer=circleArea(10);
 console.log(answer);
 console.log(Math.round(answer*100)/100);