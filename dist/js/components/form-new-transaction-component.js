import { SaldoComponent } from "./balance-component.js";
import { Account } from "../types/account.js";
import { AccountStatementComponent } from "./account-statement.js";
const formNewTransaction = document.querySelector(".block-nova-transacao form");
formNewTransaction.addEventListener("submit", (event) => {
    try {
        event.preventDefault();
        const inputTransactionType = document.querySelector("#tipoTransacao");
        const inputValue = document.querySelector("#valor");
        const inputDate = document.querySelector("#data");
        const transctionType = inputTransactionType.value;
        const date = new Date(inputDate.value + " 00:00:00");
        if (!formNewTransaction.checkValidity()) {
            alert("Please check your new transaction input values and try again.");
            return;
        }
        const newTransaction = {
            type: transctionType,
            value: inputValue.valueAsNumber,
            date: date
        };
        Account.registerTransaction(newTransaction);
        SaldoComponent.updateBalance(Account.getBalance());
        AccountStatementComponent.updateAccountStatement();
        formNewTransaction.reset();
    }
    catch (error) {
        alert(error.message);
    }
});
