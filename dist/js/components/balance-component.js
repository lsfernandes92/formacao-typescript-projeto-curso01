import { formatCurrency } from "../parsers/format-currency.js";
import { formatDate } from "../parsers/format-date.js";
import { Account } from "../types/account.js";
import { DateType } from "../types/date-type.js";
const lblBalance = document.querySelector(".saldo-valor .valor");
const lblDate = document.querySelector(".block-saldo time");
lblDate.textContent = formatDate(Account.getLoginDate(), DateType.WEEKDAY_DAY_MONTH_YEAR);
const renderBalance = (newBalance) => {
    lblBalance.textContent = formatCurrency(newBalance);
};
export const SaldoComponent = {
    updateBalance(newBalance) {
        renderBalance(newBalance);
    }
};
renderBalance(Account.getBalance());
