function avgTeam(points1,points2,points3){
    return(points1+points2+points3)/3;
}
let johnTeam = avgTeam(89, 120, 103);
let mikeTeam = avgTeam(116, 94, 123);
let maryTeam = avgTeam(97, 134, 105);

function whoWin(johnTeam, mikeTeam , maryTeam){
    let max = Math.max(johnTeam, mikeTeam , maryTeam);
   if (max === maryTeam) {
       console.log("maryTeam");
    }else if (max === mikeTeam){
        console.log("mikeTeam");    
   }else if (max === johnTeam){
        console.log("johnTeam");      
   }else if (mikeTeam === johnTeam || mikeTeam === maryTeam || johnTeam === maryTeam){
    console.log("even");    
   }
}

whoWin(johnTeam,maryTeam,mikeTeam);