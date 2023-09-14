let input= document.getElementById("input");
// let string=""

// line1
document.querySelector("#AC").addEventListener('click', function(){
    input.value=""
})

document.querySelector("#zero").addEventListener('click', function(){
    input.value+="0"
})
document.querySelector("#Del").addEventListener('click', function(){
   input.value=(input.value).toString().slice(0,-1)
})
document.querySelector("#brace1").addEventListener('click', function(){
    input.value+="("
})
document.querySelector("#brace2").addEventListener('click', function(){
    input.value+=")"
})

//line 2
document.querySelector("#seven").addEventListener('click', function(){
    input.value+="7"
})
document.querySelector("#eight").addEventListener('click', function(){
    input.value+="8"
})
document.querySelector("#nine").addEventListener('click', function(){
    input.value+="9"
})
document.querySelector("#mul").addEventListener('click', function(){
    input.value+="*"
})
document.querySelector("#div").addEventListener('click', function(){
    input.value+="/"
})

// line3
document.querySelector("#four").addEventListener('click', function(){
    input.value+="4"
})
document.querySelector("#five").addEventListener('click', function(){
    input.value+="5"
})
document.querySelector("#six").addEventListener('click', function(){
    input.value+="6"
})
document.querySelector("#sub").addEventListener('click', function(){
    input.value+="-"
})
document.querySelector("#add").addEventListener('click', function(){
    input.value+="+"
})

// line4
document.querySelector("#one").addEventListener('click', function(){
    input.value+="1"
})
document.querySelector("#two").addEventListener('click', function(){
    input.value+="2"
})
document.querySelector("#three").addEventListener('click', function(){
    input.value+="3"
})
document.querySelector("#dot").addEventListener('click', function(){
    input.value+="."
})
document.querySelector("#result").addEventListener('click', function(){
    input.value=eval(input.value)
})