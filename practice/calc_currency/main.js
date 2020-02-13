var inpSelect = document.getElementById('input');
var outSelect = document.getElementById('output');
var rates = {'ru': 0.45, 'ua': 1, 'usd': 23.7};
var num = document.getElementById('num');
var result = document.getElementById('result');
var answer = 0;

inpSelect.addEventListener('change', func);
outSelect.addEventListener('change', func);
num.addEventListener('keyup', func);

function func() {
	if (inpSelect.value != outSelect.value) {
		result.innerHTML = '';
		answer = rates[inpSelect.value] / rates[outSelect.value] * num.value;
		result.innerHTML = answer;
	} else{
		alert('Выберите другую валюту!');
	}
}



