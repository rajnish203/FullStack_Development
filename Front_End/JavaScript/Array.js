var arr=[1,2,3,4]; // creating an array
console.log(arr)
var arr1=new Array(1,2,3,4,5);
console.log(arr1);
console.log(arr1[4]);
console.log(arr1[8]); // when we try to access out of index it gives undefined not an error
arr1[7]=100; // we assign the value at postion then 5 and 6 is empty means undefined
console.log(arr1)  //[ 1, 2, 3, 4, 5, <2 empty items>, 100 ]
console.log(arr1.length)
var arr3 =new Array(); // Empty array
console.log(arr3)
var arr4=new Array(4)//It will indicate the size of the array
console.log(arr4)
var arr5=new Array(2,3)// element more than one is the element of the array
console.log(arr5)

for(var i=1;i<arr5.length;i++){
   arr5[i]=i;
}
console.log(arr5)


// array in javascript can be hetrogenious means we can store the data of different type in single array
var arr=['abc', 10 , true, 20.0];
var arr5=new Array(1000);


/* Different function on the array */
console.log(arr5.length);// tell length of the array
arr.push(false);// push the data at the end of the array [ 'abc', 10, true, 20, false ]
console.log(arr)
arr.pop();// to delete the element from the array [ 'abc', 10, true, 20 ]
console.log(arr)
arr.shift(); // it will shift the array towards the left [ 10, true, 20 ]
console.log(arr)
arr.unshift(8);// it will shift the array towards the right 
console.log(arr);//[ 8, 10, true, 20 ]

/* Splice function this function is used to mainupulate the array means to perform 
deletion and insertion 
                           Splice function(Start index, Deletion count, Element to be inserted)
Splice function takes three 
1> Start index = from where we want to delete the element 
2> Deletion count = How many element want to delete from the array 
3> Element to be inserted = This is optional , Takes the element to insert in the array
    at the last index of deletion element 
  arr =[ 8, 10, true, 20 ]
*/
arr.splice(1, 1);
console.log(arr);//[ 8, true, 20 ]
arr.splice(1,2,23);//[ 8, 23 ]
console.log(arr);
var arr9=[1,2,3,4,5,6,7,8];
arr9.splice(1);// if we not mention delete count it will delete all the element from start index 
console.log(arr9);//[ 1 ]


/* Iterating over the arrays */
var arr9=[1,2,3,4,5,6,7,8];
for(var i=0;i<=arr9.length;i++){  
   print(arr9[i]);
}
function print(element ){ // this function also takes two optional argument index of the array and array itself
   console.log(element);
}
// for Each method
arr9.forEach(print);// it takes only fuction name 

                       




