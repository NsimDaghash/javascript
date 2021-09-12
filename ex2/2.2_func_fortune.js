function tellFortune (jobTitle,location,partnerName,numberOfChildren)
{
    let str;
    //str='You will be a ' + jobTitle +' in ' + location +' and married to ' + partnerName + ' with '+ numberOfChildren +' children';
    str=`You will be a  ${jobTitle}  in  ${location} and married to  ${partnerName} with ${numberOfChildren} children`;
    return(str);
}

let fortune;
fortune=tellFortune('programmer','Tel Aviv','Sharon',2);
console.log(fortune);