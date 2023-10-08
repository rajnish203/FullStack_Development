
// This is of Dom.html file 


/*  Select the element with ById **** */

var Heading=document.getElementById('one');
console.log(Heading);
// <h1 id=​"one">​Heading​</h1>​
Heading.style.color='red';
//'red'
Heading.style.backgroundColor='cyan'
'cyan'



/*  Select the element with TagName **** */

var headings=document.getElementsByTagName('h1');
console.log(headings);
//VM1062:1 HTMLCollection(2) [h1#one, h1#two, one: h1#one, two: h1#two]

headings[1].innerText="Second Heading";
'Second Heading'





/*  Select the element with ClassName **** */

var para=document.getElementsByClassName('para');
undefined
console.log(para);//HTMLCollection [p.para]
para[0].style.backgroundColor='red';//'red'




/*  Select the element with QuerySelector **** */


var heading2=document.querySelector('#one');
console.log(heading2);
 //<h1 id=​"one" style=​"color:​ red;​ background-color:​ cyan;​">​Heading​</h1>​
heading2.style.color='blue';
'blue'