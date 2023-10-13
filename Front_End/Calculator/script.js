let inputBox = document.getElementById('inputBox')
let buttons = document.querySelectorAll('button')

let string = ''
var textTouch=document.getElementById('text1');
var c1=textTouch.style.color;
var b1=textTouch.style.backgroundColor;
var sec=1;
textTouch.addEventListener('click', function(){
    textTouch.style.color='red';
    textTouch.style.backgroundColor='black';
    sec++;
    if(sec==3){
        textTouch.style.color=c1;
        textTouch.style.backgroundColor=b1;
        clearInterval(id);
    }
})
var id=setTimeout(function(), 1000);

buttons.forEach(element =>{
    element.addEventListener('click', (b)=>{
        if(b.target.innerText == '='){
            string = String(eval(string))
            inputBox.value = string;
        }
        else if (b.target.innerText == 'AC'){
            string = ''
            inputBox.value = string;
        }
        else if(b.target.innerText == 'DEL'){
            string = string.substring(0,string.length-1)
            inputBox.value = string;
        }
        else if(b.target.id == 'plusMinus'){
            string = String(-eval(string))
            inputBox.value = string;
        }
        else{
            string += b.target.innerText
            inputBox.value = string
        }
    })
})