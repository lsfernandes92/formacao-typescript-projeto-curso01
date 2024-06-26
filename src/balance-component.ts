let balance: number = 3000;

const lblBalance = document.querySelector(".saldo-valor .valor") as HTMLElement;
const lblDate = document.querySelector(".block-saldo time") as HTMLElement;

lblBalance.textContent = formatCurrency(balance);
lblDate.textContent = formatDate(new Date(), DateType.WEEKDAY_DAY_MONTH_YEAR);

