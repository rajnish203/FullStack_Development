function showAlert(message){
    console.log(message);
}

function sum(a, b){
    // console.log(a+b);
    return a+b;
}
 var a=sum(4,6);
 console.log(a);
showAlert("Hellow");
// if we pass lesser parameter for that function then rest of the parameter is undefined
var c=sum(3)// a=3 and b =undefined , 3+undefined =NaN
console.log(c);// it will print NaN


// we pass more parameter than required then extra parameter ignored by the compiler
var  d=sum(3, 5, 6);// a=3, b=5, and rest is ignored
console.log(d);// 3+5=8



// Hoisting

// Variable hoisting in JavaScript is a behavior that allows variable declarations to be moved to the top of their
// containing scope during the compilation phase. This behavior can sometimes lead to unexpected results if not 
// understood correctly. The purpose of variable hoisting is to enable the use of variables before they are declared 
// in the code. 
console.log(gh);
hoistDemo();// function hoisting is occur
function hoistDemo(){
    console.log(i); // variable hsoiting is occur 
    var i=10;
}
var gh="i am the king "


// execution context
// in JavaScript, an execution context is an abstract concept that represents the environment in which code is executed. It consists of two 
// main components: the Variable Object (VO) and the Scope Chain. Execution contexts are crucial for understanding how JavaScript code is 
// executed and how variables and functions are accessed within a program
 var name="global";
 function scopDemo(){
    // var name="global"
    console.log(name);
 }
 scopDemo();

 /* Exectution context of global variable name
 varibale environment
 this

 And exection context of function 
 variable 
 this -: it refer to the dependecy during the execution
 refrence to outer environment

 // Call stack for the exceution or execution stack

                          | ScopeDemo |
                          |___________|
                          |   globlal |
                          |___________| first push global execution context in the stack then Scopedemo
                          then first execute scopedemo after the global
                          */
                          var name="global";
                          function scopDemo(){
                             // var name="global"
                             console.log(name);
                          }
                          scopDemo();
                          console.log("Global context");

                        /* Another Example */
                        function domain(){
                            console.log("Inside domain");
                        }
                        function b(){
                            domain();
                            console.log("inside b");
                        }
                        function y(){
                            b();
                            console.log("inside y");

                        }
                        y();
                        console.log("Global Context")
                        /* call stack for the above code is 
                          _____________
                          | domain()  |
                          |___________|
                          |   b()     |
                          |___________|
                          |   a()     |
                          |___________|
                          |   globlal |
                          |___________| 
                          it clearly shows that first execute domain() then print "Inside domain"
                          after then control go to b() and then print  "inside b"
                          after then control go to y() and then print "inside y"
                          and lastly excite global to print the "Global Context"
                          */

                          


          /* function within the fucntion 
          we can call the inside function only inside that function in which that function is defined
          and variable declared in innner function have only scope inside the innner function 
          outer scope of the function is in the outer function and outer scope of outer function is 
          also global scope for innner function.
          like n is global variable and global scope of outer function is global but it can be also accessed by 
          innner function. 
          */
          var name="global";
          var n="nothing"
          function outer(){
            var outerVar=10;
            var name="outer";
            function innner(){
                var name="inner";
                console.log(name);
                console.log(n);
            }
            innner();
            console.log(name);
          }
          outer();
          console.log(name);


          /* Function Declaration and Expression */


          /* Function Declaration */
          function fact(n){
            var ans=1;
            for(i=1;i<=n;i++){
                ans*=i;
            }
            return ans;
        }
        var factorial=fact(0);
        console.log(factorial);


        /* Function Expression 
        It means that a function is assigned to a variable followed by semin colon.
        This function is called by its variable name
        There are two types of function Expression
        1> Named Function Expression
        2>Without Function Name called Anonymous 
        */
        var factorial=function fact1(n){// this is named function expression
            var ans=1;
            for(i=1;i<=n;i++){
                ans*=i;
            }
            return ans;
        };
        var factorial2=function(n){  //  This is anonymous function expression
            // var ans=1;
            // for(var i=1;i<=n;i++){
            //     ans*=i;
            // }
            // return ans;
            if(n==0){
                return 1;
            }
            return n*factorial2(n-1)
        }      
        console.log(factorial(6))// function called by its variable name  
        console.log(fact(4))// this name is generate the error 
        console.log(factorial)// the value of variable is function
        console.log(factorial2)// in case of anonymous func exp variable name is assigned as func name
        console.log(factorial2(3));

        /* Diffrence between func Declaration and Func Exp 
        Hoisting is not work for the func exp and hoisting is working for the func declaration.
        Func exp is pression is preferable for write the code when do not want interfare the hoisting
        */

        /* Function passed as Argument */
        function ncr(n, r, factorial){  // Here factorial func exp is passed as argument, we can also passed a func
            return factorial(n)/(factorial(r)*factorial(n-r));
        }
        console.log(ncr(5, 2, factorial));






        console.log(" I am king of this world")
        
       






 



