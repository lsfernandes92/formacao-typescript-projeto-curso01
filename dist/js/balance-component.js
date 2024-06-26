let balance = 3000;
const lblBalance = document.querySelector(".saldo-valor .valor");
const lblDate = document.querySelector(".block-saldo time");
lblBalance.textContent = formatCurrency(balance);
lblDate.textContent = formatDate(new Date(), DateType.WEEKDAY_DAY_MONTH_YEAR);
