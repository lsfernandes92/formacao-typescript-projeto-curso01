import { formatCurrency } from "../parsers/format-currency.js";
import { formatDate } from "../parsers/format-date.js";
import { DateType } from "../types/date-type.js";
let balance = 3000;
export const lblBalance = document.querySelector(".saldo-valor .valor");
const lblDate = document.querySelector(".block-saldo time");
lblDate.textContent = formatDate(new Date(), DateType.WEEKDAY_DAY_MONTH_YEAR);
export const getBalance = () => {
    return balance;
};
export const updateBalance = (newBalance) => {
    balance = newBalance;
    lblBalance.textContent = formatCurrency(newBalance);
};
updateBalance(balance);
