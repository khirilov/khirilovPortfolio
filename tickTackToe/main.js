var field = document.getElementById('field');
var info = document.getElementById('info');
var refresh = document.getElementById('refresh');

function tickTackToe () {
    var cells = field.querySelectorAll('.cell');
    var gamer = 'X';
    var stepCount = 0;
    setText(info, '?');
    for (let i = 0; i < cells.length; i++) {
        cells[i].addEventListener('click', prepareCell);
    }

    function prepareCell() {
        this.innerHTML = gamer;
        gamer = getNextGamer(gamer);
        this.removeEventListener('click', prepareCell);

        var winner = getWinner(cells, stepCount);

        if (winner !== false) {
            setText(info, winner);
            releaseCells(cells, prepareCell);
            updateResult(winner);
            stepCount = 0;
        } else if (winner === false) {
            stepCount++;
        }
    }
    refresh.addEventListener('click', function() {
        clearCells(cells);
        setText(info, '?');

        for (let i = 0; i < cells.length; i++) {
            cells[i].addEventListener('click', prepareCell);
        }
    });

};
tickTackToe();

function setText(elem, text) {
    elem.innerHTML = text;
}

function releaseCells(cells, func) {
    for (let i = 0; i < cells.length; i++) {
        cells[i].removeEventListener('click', func);
    }
}

function clearCells(cells) {
    for (let i = 0; i < cells.length; i++) {
        cells[i].innerHTML = '';
    }
}

function getWinner(cells, stepCount) {
    var winCombination = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],

        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],

        [0, 4, 8],
        [2, 4, 6], 
    ];

    for (let i = 0; i < winCombination.length; i++) {
        var comb = winCombination[i];

        if (cells[comb[0]].innerHTML == cells[comb[1]].innerHTML &&
            cells[comb[1]].innerHTML == cells[comb[2]].innerHTML &&
            cells[comb[0]].innerHTML != '') {
                return cells[comb[0]].innerHTML;
        }
        if (stepCount >= 8) {
            return 'draw';
        }
    }
    return false;
}
function checkCell(cells) {
    for (let i = 0; i < cells.length; i++) {
        cells[i].innerHTML 
    }
}
function getNextGamer(gamer) {
    if (gamer == 'X') {
        return '0';
    } else {
        return 'X';
    }
}

var player1 = document.getElementById('player1');
var player2 = document.getElementById('player2');
var drawResult = document.getElementById('draw');
var win = {x: 0, '0': 0, draw: 0}

function updateResult(winner) {

    if (winner === 'X') {
        win.x++;
    } else if (winner === '0') {
        win['0']++;
    } else {
        win.draw++;
    }

    player1.innerHTML = win['x'];
    player2.innerHTML = win['0'];
    drawResult.innerHTML = win.draw;
}