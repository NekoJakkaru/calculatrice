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


var finishOp = false;


function writeOperation(mychar) {
    if(finishOp) {
        screen.innerHTML = mychar; //efface l'écran et recommence de Zero.
    }

    else {
        screen.innerHTML += mychar;
    }

    if(mychar=='=') {
        screen.innerHTML += calcule();
        finishOp = true;
    }

    else {
        finishOp = false;
    }

};

function calcule(operation) {
    var cal = screen.innerHTML;
    console.log(cal[0]);
    console.log(cal[cal.length-1]);
    var strNumber1 = '';
    var strNumber2 = '';
    var operator = '';
    for( i = 0; i < cal.length; i+=1){
        if(operator == ''){
            if (cal[i]=="=" || cal[i]=="+" || cal[i]=="-" || cal[i]=="*" || cal[i]=="/"){
                operator = cal[i];
            } else {
                console.log("s'est un chiffre : " + cal[i]);
                strNumber1 += cal[i];
            }
        } else {
            if (cal[i]=="=" || cal[i]=="+" || cal[i]=="-" || cal[i]=="*" || cal[i]=="/"){
                alert("Fucking error you have 2 operators!")
            } else {
                console.log("s'est un chiffre : " + cal[i]);
                strNumber2 += cal[i];
            }
        }
    }
    return strNumber1;
}


btn_0.addEventListener("click", function() {
    writeOperation(btn_0.value);

});
btn_1.addEventListener("click", function() {
    writeOperation(btn_1.value);
});
btn_2.addEventListener("click", function() {
    writeOperation(btn_2.value);
});
btn_3.addEventListener("click", function() {
    writeOperation(btn_3.value);
});
btn_4.addEventListener("click", function() {
    writeOperation(btn_4.value);
});
btn_5.addEventListener("click", function() {
    writeOperation(btn_5.value);
});
btn_6.addEventListener("click", function() {
    writeOperation(btn_6.value);
});
btn_7.addEventListener("click", function() {
    writeOperation(btn_7.value);
});
btn_8.addEventListener("click", function() {
    writeOperation(btn_8.value);
});
btn_9.addEventListener("click", function() {
    writeOperation(btn_9.value);
});

btnMultiply.addEventListener("click", function() {
    writeOperation(btnMultiply.value);
});
btnAdd.addEventListener("click", function() {
    writeOperation(btnAdd.value);
});
btnSubtract.addEventListener("click", function() {
    writeOperation(btnSubtract.value);
});
btnDivide.addEventListener("click", function() {
    writeOperation(btnDivide.value);
});

btnResult.addEventListener("click", function() {
    writeOperation(btnResult.value);

});
