const module2=require('./module')
// when we import the module then it execute the file only once and save in cache 
// if we import second time it is not execute the file 

//  console.log(module2.sum(20, 5));
console.log(module2(3, 4));// this is imported the function 
 



