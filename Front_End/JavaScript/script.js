
//click event 
var hellowButton=document.getElementById('btn');
hellowButton.addEventListener('click', function() {
    alert('Hello')
});  


// mouse eveent 
var outerDiv=document.getElementById('outer');
outer.addEventListener('mouseover', function(){
    console.log("mouse over");
})
outer.addEventListener('mouseout', function(){
    console.log("mouse out");
})

//keyboard event

var inputElement=document.getElementById('search');
inputElement.addEventListener('keypress', function(){
    console.log('Key pressed');
});
inputElement.addEventListener('keydown', function(){
    console.log('key Down');
});
inputElement.addEventListener('keyup', function(){
    console.log("key up");
});


document.addEventListener('keypress', function(){
    console.log('key pressed');
})

// to know the which key is pressed
document.addEventListener('keydown', function(eveent){
    console.log('key down', eveent.keyCode)
})



//Porpagattion of event
// it propagate bottom to if handler is present 
// then it propagates from innner --->  outer ----> document

//for stop the propagation we use the stop propagation method
var innerDiv=document.getElementById('inner');
innerDiv.addEventListener('click', function(eveent){
    
    console.log("Clicked on inner div");
    eveent.stopPropagation();
});

var outerDiv1=document.getElementById('outer1');
    
outerDiv1.addEventListener('click', function(){
    console.log('outer div');
})
document.addEventListener('click', function(){
    console.log('document');
})

