import { formatCurrency } from "../parsers/format-currency.js";
import { formatDate } from "../parsers/format-date.js";
import { DateType } from "../types/date-type.js";

let balance: number = 3000;

export const lblBalance = document.querySelector(".saldo-valor .valor") as HTMLElement;
const lblDate = document.querySelector(".block-saldo time") as HTMLElement;

lblDate.textContent = formatDate(new Date(), DateType.WEEKDAY_DAY_MONTH_YEAR);

export const getBalance = (): number => {
  return balance;
}

export const updateBalance = (newBalance: number): void => {
  balance = newBalance;
  lblBalance.textContent = formatCurrency(newBalance);
}
updateBalance(balance);