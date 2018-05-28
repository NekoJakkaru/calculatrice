var screen = document.getElementById('screen');
var btnlist = document.getElementsByTagName('input');

var btnAdd = document.getElementById('+');
var btnMultiply = document.getElementById('*');
var btnSubtract = document.getElementById('-');
var btnDivide = document.getElementById('/');
var btnResult = document.getElementById('=');
var btn_0 = document.getElementById('0');
var btn_1 = document.getElementById('1');
var btn_2 = document.getElementById('2');
var btn_3 = document.getElementById('3');
var btn_4 = document.getElementById('4');
var btn_5 = document.getElementById('5');
var btn_6 = document.getElementById('6');
var btn_7 = document.getElementById('7');
var btn_8 = document.getElementById('8');
var btn_9 = document.getElementById('9');

btn_0.addEventListener("click", function(){
    screen.innerHTML = btn_0.value;
});
btn_1.addEventListener("click", function(){
    screen.innerHTML = btn_1.value;
});
btn_2.addEventListener("click", function(){
    screen.innerHTML = btn_2.value;
});
btn_3.addEventListener("click", function(){
    screen.innerHTML = btn_3.value;
});
btn_4.addEventListener("click", function(){
    screen.innerHTML = btn_4.value;
});
btn_5.addEventListener("click", function(){
    screen.innerHTML = btn_5.value;
});
btn_6.addEventListener("click", function(){
    screen.innerHTML = btn_6.value;
});
btn_7.addEventListener("click", function(){
    screen.innerHTML = btn_7.value;
});
btn_8.addEventListener("click", function(){
    screen.innerHTML = btn_8.value;
});
btn_9.addEventListener("click", function(){
    screen.innerHTML = btn_9.value;
});

btnMultiply.addEventListener("click", function(){
    screen.innerHTML = btnMultiply.value;
});
btnAdd.addEventListener("click", function(){
    screen.innerHTML = btnAdd.value;
});
btnSubtract.addEventListener("click", function(){
    screen.innerHTML = btnSubtract.value;
});
btnDivide.addEventListener("click", function(){
    screen.innerHTML = btnDivide.value;
});

btnResult.addEventListener("click", function(){
    var operation = screen.innerHTML;
    screen.innerHTML = btnResult.value;

});
