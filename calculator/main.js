var calc = document.getElementById('calc');
var buttons = calc.getElementsByClassName('button');
var display = document.getElementById('display');
var str = '';
for (var i = 0; i < buttons.length; i++) {
    addEvent(buttons[i]);              
}
function addEvent(button) {
    button.addEventListener('click', event);
    function event() {
        var type = button.getAttribute('data-type');  
        if (type === '=') {
            str = eval(str);
            display.value = str;
            return;
        } else if (type === 'C') {
            str = '';
        } else {
            str += type;
        }
        display.value = str;
    }
}