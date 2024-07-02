import { formatCurrency } from "../parsers/format-currency.js";
import { formatDate } from "../parsers/format-date.js";
import { Account } from "../types/account.js";
import { DateType } from "../types/date-type.js";
const elementAccountStatement = document.querySelector(".extrato .registro-transacoes");
const renderAccountStatement = () => {
    const transactionsGroups = Account.getTransactionsGroup();
    elementAccountStatement.innerHTML = "";
    let htmlTransactionsRegisters = "";
    for (let transactionGroup of transactionsGroups) {
        let htmlTransactionItem = "";
        for (let transaction of transactionGroup.transactions) {
            htmlTransactionItem += `
        <div class="transacao-item">
          <div class="transacao-info">
            <span class="tipo">${transaction.type}</span>
            <strong class="valor">${formatCurrency(transaction.value)}</strong>
          </div>
          <time class="data">${formatDate(transaction.date, DateType.DAY_MONTH)}</time>
        </div>
      `;
        }
        htmlTransactionsRegisters += `
      <div class="transacoes-group">
        <strong class="mes-group">${transactionGroup.label}</strong>
        ${htmlTransactionItem}
      </div>
    `;
    }
    if (htmlTransactionsRegisters === "") {
        htmlTransactionsRegisters = "<div>There is no transaction available</div>";
    }
    elementAccountStatement.innerHTML = htmlTransactionsRegisters;
};
renderAccountStatement();
export const AccountStatementComponent = {
    updateAccountStatement() {
        renderAccountStatement();
    }
};
