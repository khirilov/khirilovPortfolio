var check = document.getElementById('check');
var arr = [4, 5, 2, 8, 4, 8]
for (let i = 0; i < arr.length; i++) {
    var input = document.createElement('input');
    input.setAttribute('data-number', arr[i]);
    document.body.appendChild(input);
}

check.addEventListener('click', checkInputs);

function checkInputs() {
    for (let i = 0; i < input.length; i++) {
        var num = input[i].getAttribute('data-number')
        if (num == input[i].value) {
            input[i].style.backgroundColor = 'green';
        } else {
            input[i].style.backgroundColor = 'red';
        }
    }
}
 