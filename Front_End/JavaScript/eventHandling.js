// mouse event for the event Handler 
//     Two way to handle the event 
    
//      1  -->
//     <!-- <button id="btn" onclick="alert('Hello')"> Say Hello</button> 
//     <button id="btn"> Say Hello</button>
//     -->



//2nd method 
var hellowButton=document.getElementById('btn');
hellowButton
//<button id=​"btn">​ Say Hello​</button>​
hellowButton.addEventListener('click', function() {
    alert('Hwllo')
});                                   
