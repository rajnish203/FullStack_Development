// creation of object 
var student ={};// this ia an empty object without any property or attribute 
var student=new Object();// empty object 
// object store the value in key value pair 
// all the keys in the objet is string 
// like Name is Key and Rajnish is value 
console.log(student);
console.log(typeof(student));
var student ={name:"Rajnish",
                roll_no:1921084,
                marks:94
             }
console.log(student)//{ name: 'Rajnish', roll_no: 1921084, marks: 94 }
// to access the property of the object 
console.log(student.marks);//94
// we can change the property value also 
student.roll_no=1905383;
console.log(student);//{ name: 'Rajnish', roll_no: 1905383, marks: 94 }

// we can add the property to the object 
student.sem=4;
console.log(student)//{ name: 'Rajnish', roll_no: 1905383, marks: 94, sem: 4 }

/* Square Bracket Notation 
We can also access the property of object by Square Bracket Notation
some certain situation where the square brackets notation is used 
1> when key is invalid
2> when we need dynamic property of the object then . notation is not work
*/
console.log(student["marks"])

//when key is invalid
var student ={"-name":"Rajnish", // here name is invalid key
                roll_no:1921084,
                marks:94
             }
//  console.log(student.-name);// this will error 
console.log(student["-name"]);// it will give Rajnish

// when we need dynamic property of the object
var student ={name:"Rajnish", 
                roll_no:1921084,
                marks:94
             }
function printProperty(obj, prop){
    console.log(obj[prop]);
}

var prop="name";
printProperty(student, prop);




/* Deleting the property of the object */
var student ={name:"Rajnish", 
                roll_no:1921084,
                marks:94
             }

delete student.marks;
console.log(student);
 

/* How the Objects are Stored 
It is stored in the heap memeory.
*/
var obj1={
    "p1":10
}
var obj2=obj1;// this statement will not create the other object instead of the obj2 reffer the same object 
console.log(obj1);
console.log(obj2)
obj1.p1=100; // we change the property of the object 
console.log(obj1);
console.log(obj2)
console.log(obj1==obj2);// it will check whether obj1 and obj2 refering same memory location(true)
console.log(obj1===obj2)// it is comapring memory location of two object(true)

obj2 ={   // now obj2 refering different memory location 
    "p1":100
}
console.log(obj1==obj2);// false 



/* Iterating over the object */
var student ={name:"Rajnish", 
                roll_no:1921084,
                marks:94
             }
for(var prop in student){
    console.log(prop, student[prop]);// prop print keys and student[prop] print their value
}
var keys1=Object.getOwnPropertyNames(student);// it is return all the keys of the object
var keys =Object.keys(student) // it is return all the keys of the object
console.log(keys);//[ 'name', 'roll_no', 'marks' ]
console.log(keys1)//[ 'name', 'roll_no', 'marks' ]



/* Nested object */
var student={
    college_details:{
       "name":"Guru Nanak Dev Engineering College",
       "roll_no":1905383,
       "Department":"Informtion Technology"
    },
    Address:{
        city:"Ludhiana",
        pincode:141006
    }
}
// for access the nested object 
console.log(student["Address"]["city"]);// Ludhiana
console.log(student.Address.city)
console.log(student["Address"].city);
console.log(student.Address["city"]);



/* Arrays and Object 

Arrays in javascript is object. In this  index is key 

*/
var arr=[1,2,3,4,5,6,7,8,9];
console.log(arr);
 var obj={    // this is similar to the array var obj =[1,2,3,4,5]
    "0":1,
    "1":2,
    "2":3,
    "3":4,
    "4":5
 }
 // length is only valid for the array not for object

 arr[10]="abc";
 console.log(arr);//[ 1, 2, 3, 4, 5, 6, 7, 8, 9, <1 empty item>, 'abc' ]
 console.log(arr.length)
 arr.prop1="demo";
 console.log(arr);
 console.log(arr.length);
 // By adding any porperty to the array it does not affect the length of the array

 /* Iterating over array using for in */


 for(var i in arr){ // i will print the keys of the arrays
    console.log(i);
 }



 /* TIMING EVENTS

 It allow the run javascript code after certain amonut of time or time interval
 In this function are 
 1> setTimeout :- It takes two parameter one is function and to execute another is time interval in millseconds 
    it means it excute the function after that given period of time , Here we pass the function in setTimeout not call the function 
    call the function is like function_name();
    and funcion pass means only pass the name of the function like setTimeout(sayHellow, 1000) this.
 2> setInverval :- It is the same as the setTimeout function the only differnec is it repeat the same after a certain interval untiln
    we will stop it.

 3> clearInteval:- It takes the id as parameter which is return by the setInterval function. It is use to stop the setInterval repeation 
    after a certain count.

  */
 function sayHellow(){
    console.log("Hello");
 }
//  setTimeout(sayHellow, 1000); // here sayHellow function execute after the 1000 ms. it execute only once 
//  setInterval(sayHellow, 1000); // it excute until we will not stop it.


 /* Example of setInterval And clearInterval */
//  var sec=1;
//  function sayHellow(){
//     console.log(" after ", sec, " Good Morning");
//     sec++;
//     if(sec==11){
//         clearInterval(id);   // it will stop after the 10 th execution
//     }
//  }
//  var id =setInterval (sayHellow , 1000);




/* COUNT DOWN TIMER */
var sec2 =10;
function coutnDownTimer(){
    console.log(sec2);
    sec2--;
    if(sec2==0){
        console.log("Time Up!!")
        clearInterval(id);
    }

}
var id=setInterval(coutnDownTimer, 1000);



/* Pass by value and Pass by refrence 
 In javascript in case of object and array is pass by refrence and other primitive type is pass by value

*/
function f (a, b, c){
    a=3;
    b.push("bob");
    c.first=false;
}
var x=4;// call by value
var y=["raj", "rahul"];// call by refrence
var z={ first:true};// call by refrence
f(x,y,z);
console.log(x, y, z);




/* Deep copy and Shallow Copy 

Deep copy :- Value copied to the new variable and disconnected from the old variable if any change occur it does not affect the old variable
 
Shallow copy:- Copied to the new Variable but still connected to the old variable when any change occur in new variable it affect theb old variable
const a =4;
*/





