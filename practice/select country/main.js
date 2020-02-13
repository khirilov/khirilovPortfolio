var citySelect = document.getElementById('cities');
var countrySelect = document.getElementById('countries');
var ph = document.getElementById('ph');


var data = {
	Ukraine: ['Kiev', 'Vinnitsia', 'Lviv', 'Odessa'],
	Russia: ['Moscow', 'Ekaterenburg', 'St. Peterbutg', 'Volgograd'],
	USA: ['New York', 'Las Vegas', 'Los Angeles', 'Vashington'],
}

var countries = Object.keys(data);
addOptions(countrySelect, countries);

var defaultCity = data[countries[0]];
addOptions(citySelect, defaultCity);

countrySelect.addEventListener('change', changeCity);
countrySelect.addEventListener('change', toPh);

function changeCity() {
	var cities = data[this.value];
	citySelect.length = 0;

	addOptions(citySelect, cities);

}
citySelect.addEventListener('change', toPh);

function addOptions(select, arr) {
	for (let i = 0; i < arr.length; i++) {
		select.add(new Option(arr[i]));
	}
}

function toPh() {
	ph.innerHTML = countrySelect.options[countrySelect.selectedIndex].text + ", " +
	citySelect.options[citySelect.selectedIndex].text;
}

