function isPalindrome(x) {
  let a = x.toLowerCase()
  let b = x.split('').reverse().join('').toLowerCase()
  
  return a === b ? true : false 

}



 console.log(isPalindrome("anna")  ) //==> true
 console.log(isPalindrome("walter") )//==> false
 console.log(isPalindrome(12321))   // ==> true
 console.log(isPalindrome(123456))  // ==> false