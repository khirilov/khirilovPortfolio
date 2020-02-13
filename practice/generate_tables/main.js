var widthTable = document.getElementById('widthTable');
var heightTable = document.getElementById('heightTable');
var tables = document.getElementById('tables');
var generate = document.getElementById('generate')

generate.addEventListener('click', addTable)

function addTable() {
    var table = document.createElement('table');
    tables.appendChild(table);
    for (let i = 0; i < +heightTable.value; i++) {
        tr = document.createElement('tr');
        table.appendChild(tr);
    }

    var allTr = document.querySelectorAll('tr');
    for (let i = 0; i < allTr.length; i++) {
        for (let j = 0; j < +widthTable.value; j++) {
            var td = document.createElement('td');
            allTr[i].appendChild(td);
        }
    }
    
}
