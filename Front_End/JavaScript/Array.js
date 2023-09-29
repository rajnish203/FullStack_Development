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
var arr5=new Array(2,3)
console.log(arr5)


