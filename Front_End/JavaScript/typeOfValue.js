var a=1/0;
console.log(a);// it gives the infinit

var b=Infinity+1;
console.log(b);

var c=Infinity*2;
console.log(c);

var d=4/Infinity;
console.log(d);

console.log(Math.pow(100, 2))
console.log(Number.MAX_VALUE)

console.log(Math.sqrt(-1))// it will print NaN(not a number )

// it will extract the integer value from the string 
var e=parseInt("100")// valid for a numeric string only
console.log(e)


// if we give the character string then it will give NaN
// because charater is not a number 
var f=parseInt("Rajnish")
console.log(f)
console.log(typeof(f))

// this is a bug in javascript type of null should be null
// but it gives the object
var g=null;
console.log(g);
console.log(typeof(g))
console.log(typeof(null))


console.log(typeof(Infinity))

// type of a not a number is number
console.log.apply(typeof(NaN))




