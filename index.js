// Your code goes here

function callBack(){
    document.getElementById("text").textContent = "This is really cool!"}

document.addEventListener('DOMContentLoaded',function(){
    console.log('The DOM has loaded');
    console.log(callBack());

});

