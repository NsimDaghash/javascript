
//1.
function funcA() {
    var a = 1;       // need to be here 
    console.log(a);
    console.log(foo());

    function foo() {
    return 2;
    }
   }
   funcA();


  
  //2.
   var fullName = 'John Doe';
   var obj = {
    fullName: 'Colin Ihrig',
    prop: {
    fullName: 'Aurelio De Rosa',
    getFullName: function () {
    return this.fullName;
    }
    }
   };
   console.log(obj.prop.getFullName());
   //var test = obj.prop.getFullName;
   ///console.log(test());
   var test = obj.prop.getFullName();
   console.log(test);
   
  //3.
  
  let a = b = 0;
   function funcB() {
    
    a++;
    return a;
   }
   funcB();
   console.log(typeof a);
   console.log(typeof b);
   
  
  //4.
   function funcC1() {
    console.log("1");
   }
   funcC1();
   function funcC() {
    console.log("2");
   }  
   funcC();
    // one of the two function need to have a deffirent name , else it will get the last value of the function 
  
  //5.
  
   function funcD1() {
    d = 1;
   }
   funcD1();
   console.log(d);
   var e = 1;                   // need to be here 
   function funcD2() {
   // var e = 1;
   }
   funcD2();
   console.log(e);

   //6.
 
   function funcE() {
    console.log("Value of f in local scope: ", f);
   }
    var f=1;   // should be here .
   console.log("Value of f in global scope: ", f);
  // var f = 1;           // this should be decleared befor the console.log 
   funcE();
   