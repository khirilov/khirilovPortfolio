let yearSelect = document.getElementById('yearSelect');
let monthSelect = document.getElementById('monthSelect');
let daySelect = document.getElementById('daySelect');

function addNum(from, to, select) {
    for (i = from; i <= to; i++) {
        select.add(new Option(i));
    }
}

addNum(2000, 2040, yearSelect);
addNum(1, 12, monthSelect);
addNum(1, 31, daySelect);

daySelect.addEventListener('change', selectChangeHandle);
monthSelect.addEventListener('change', selectChangeHandle);
yearSelect.addEventListener('change', selectChangeHandle);


daySelect.addEventListener('focus', selectFocusHandle);
monthSelect.addEventListener('focus', selectFocusHandle);
yearSelect.addEventListener('focus', selectFocusHandle);

function selectChangeHandle() {
    if (checkDate(yearSelect.value, monthSelect.value, daySelect.value)) {
        alert('okey, all right');
    } else {
        alert('oooops.... wrong date');
        yearSelect.value = yearSelectDefault;
        monthSelect.value = monthSelectDefault;
        daySelect.value = daySelectDefault;
    }
}

let yearSelectDefault = yearSelect.value;
let monthSelectDefault = monthSelect.value;
let daySelectDefault = daySelect.value;

function selectFocusHandle() {
    yearSelectDefault = yearSelect.value;
    monthSelectDefault = monthSelect.value;
    daySelectDefault = daySelect.value;
}

function checkDate(year, month, day) {
    var date = new Date(year, month - 1, day);
    return date.getFullYear() == year && date.getMonth() == month - 1 && date.getDate() == day;
};