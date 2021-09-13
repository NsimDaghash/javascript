function grade(score){
    if ((score > 0 )&& (score <65 )){
        return ('F');
    }
    if ((score > 64 )&& (score <70 )){
        return ('D');
    }
    if ((score > 69 )&& (score <80 )){
        return ('C');
    }
    if ((score > 79 )&& (score <90 )){
        return ('B');
    }
    if ((score > 89 )&& (score <=100 )){
        return ('A');
    }
    else{
        return('not a valid grade')
    }
}
    let x=grade(95);
    console.log(x);
