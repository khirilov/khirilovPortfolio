var products = [
    {name: 'Coca-Cola', price: 24, quantity: 234},
    {name: 'Pepsi', price: 23, quantity: 123},
    {name: 'Fanta', price: 17, quantity: 43},
    {name: 'Sprite', price: 14, quantity: 78},
    {name: 'Mineral', price: 12, quantity: 545},
];
var keysObj = Object.keys(products);
var generator = document.getElementById('generator');
generator.addEventListener('click', generateTable);

function generateTable() {
    var table = document.createElement('table');
    var total = document.createElement('p');
    total.innerHTML = sumOfProducts(products);
    for (let i = 0; i < products.length; i++) {
        var row = document.createElement('tr');

        addCell(products[i].name, row);
        addCell(products[i].price, row);
        addCell(products[i].quantity, row);
        addCell(+products[i].price * products[i].quantity, row);
        
        table.appendChild(row);
    
    }
    document.body.appendChild(table);
    document.body.appendChild(total);

}

function addCell(elem, parent) {
    var cell = document.createElement('td');
    cell.innerHTML = elem;
    parent.appendChild(cell);
}
function sumOfProducts(arr) {
    var sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i].price * arr[i].quantity;
    }
    return sum;
}
