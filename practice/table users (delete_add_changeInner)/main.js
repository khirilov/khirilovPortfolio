var tBody = document.getElementById('tBody');
var inputName = document.getElementById('inputName');
var inputSurname = document.getElementById('inputSurname');
var button = document.getElementById('addRow');

button.addEventListener('click', func);

function func() {
    var tr = document.createElement('tr');
    for (let i = 1 ; i <=3; i++) {
        var td = document.createElement('td');
        tr.appendChild(td);
    }
    var delClone = delRow[0].cloneNode(true);
    tr.childNodes[0].innerHTML = inputName.value;
    tr.childNodes[1].innerHTML = inputSurname.value;
    tr.childNodes[2].appendChild(delClone);

    tBody.appendChild(tr);

    for (let i = 0; i < delRow.length; i++) {
        delClone.addEventListener('click', deleteRow);
    }


}

tBody.addEventListener('click', changeInner);
var bodyChilds = tBody.childNodes;
for (let i = 0; i < bodyChilds.length; i++) {
    bodyChilds[i].removeEventListener('click', changeInner);

}


function changeInner(event) {
    var changeInput = document.createElement('input');
    changeInput.value = event.target.innerHTML;
    event.target.innerHTML = '';
    event.target.appendChild(changeInput);

    changeInput.onkeyup = removeInput;
    function removeInput(e) {
        if (e.keyCode === 13) {
            event.target.innerHTML = changeInput.value;
        }
    }

}

var delRow = document.querySelectorAll('td input');

for (let i = 0; i < delRow.length; i++) {
    delRow[i].addEventListener('click', deleteRow);

}

function deleteRow() {
    this.parentNode.parentNode.remove();
}

