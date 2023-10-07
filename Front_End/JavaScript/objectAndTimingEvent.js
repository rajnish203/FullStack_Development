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



