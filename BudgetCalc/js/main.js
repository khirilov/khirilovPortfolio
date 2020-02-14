let startBtn = document.getElementById('start'),
    budgetValue = document.getElementsByClassName('budget-value')[0],
    dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
    levelValue = document.getElementsByClassName('level-value')[0],
    expenseValue = document.getElementsByClassName('expenses-value')[0],
    optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
    incomeValue = document.getElementsByClassName('income-value')[0],
    monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0],

    expensesItem = document.getElementsByClassName('expenses-item'),
    expensesBtn = document.getElementsByTagName('button')[0],
    optionalExpensesBtn = document.getElementsByTagName('button')[1],
    countDayBudgetBtn = document.getElementsByTagName('button')[2],
    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
    incomeItem = document.querySelector('.choose-income'),
    checkSavings = document.querySelector('#savings'),
    sumValue = document.querySelector('.choose-sum'),
    percentValue = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');

    let money,time;

    
    startBtn.addEventListener('click', function start() {
        time = prompt('Введите лату в формате YYYY-MM-DD', '');
        money = +prompt('Ваш бюджет на месяц?', 0);

        while (isNaN(money) || money == '' || money == null) {
            money = prompt('Ваш бюджет?', '')
        }

        appData.budget = money;
        appData.timeData = time;
        budgetValue.textContent = money.toFixed();
        yearValue.value = new Date(Date.parse(time)).getFullYear();
        monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
        dayValue.value = new Date(Date.parse(time)).getDate();
        
    });

    expensesBtn.addEventListener('click', function calculateExpenses() {
        let sum = 0;

        for (let i = 0; i < expensesItem.length; i++) {
            let a = expensesItem[i].value,
                b = expensesItem[++i].value;
            
            if ((typeof (a)) != null && (typeof (b)) != null && a != '' &&
                b != '' && a.length < 50 && b.length < 50) {
                appData.expenses[a] = b;
                sum += +b;
            } else {
                i = i -1;
            }
            expenseValue.innerHTML = sum;
        }
    });

    optionalExpensesBtn.addEventListener('click', function () {
        for (let i = 0; i < optionalExpensesItem.length; i++) {
            let opt = optionalExpensesItem[i].value;
            appData.optionalExpenses[i] = opt;
            optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' ';
        }
    });

    countDayBudgetBtn.addEventListener('click', function () {
        if (appData.budget != undefined) {
            appData.moneyPerDay = (appData.budget/30).toFixed();
            dayBudgetValue.innerHTML = appData.moneyPerDay;
    
            if(appData.moneyPerDay < 200) {
                levelValue.innerHTML = 'Минимальный уровень дохода';
            } else if (appData.moneyPerDay > 200 && appData.moneyPerDay < 1000) {
                levelValue.innerHTML = 'Cредний уровень дохода';
            } else if (appData.moneyPerDay > 1000) {
                levelValue.innerHTML = 'Высокий уровень дохода';
            } else {
                levelValue.innerHTML = 'Произошла ошибка';
            }     
        } else {
            dayBudgetValue.innerHTML = 'Произошла ошибка';
        }


    });

    incomeItem.addEventListener('input', function() {
        let items = incomeItem.value;
        appData.income = items.split(', ');
        incomeValue.innerHTML = appData.income;
    });

    checkSavings.addEventListener('click', function() {
        if (appData.savings == true) {
            appData.savings = false;
        } else {
            appData.savings = true;
        }
    });

    sumValue.addEventListener('input', function() {
        if(appData.savings == true) {
            let sum = +sumValue.value,
                percent = +percentValue.value;

                appData.monthIncome = sum/100/12*percent;
                appData.yearIncome = sum/100*percent;

                monthSavingsValue.innerHTML = appData.monthIncome.toFixed(1);
                yearSavingsValue.innerHTML = appData.yearIncome.toFixed(1);
        }
    });
    percentValue.addEventListener('input', function() {
        if(appData.savings == true) {
            let sum = +sumValue.value,
            percent = +percentValue.value;

            appData.monthIncome = sum/100/12*percent;
            appData.yearIncome = sum/100*percent;

            monthSavingsValue.innerHTML = appData.monthIncome.toFixed(1);
            yearSavingsValue.innerHTML = appData.yearIncome.toFixed(1);
        }
    });

    let appData = {
        budget: money,
        timeData: time,
        expenses: {},
        optionalExpenses: {},
        income: [],
        savings: false,
    }
 
    