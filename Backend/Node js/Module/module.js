// // we can also export the function like
// module.exports.sum=(x, y)=>{
//     return x+y;
// }

// to prove the file is executed 
console.log("imported file is executed");
// // we can also export with only exports keyword 
// exports.sum2=(x, y)=>{
//     return x+y;
// }
// with module we can export property, attributes, class as well as function 
module.exports=function(x, y){
    return x+y;
}
// or we can also export the function

// exports.div=(x, y)=>{
//     return x/y;
// }







//There are two to make the module 
// 1. Common js module 
// module.exports={
//     sum: sum,
//     div:div
// }

