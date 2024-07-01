import { SaldoComponent } from "./balance-component.js";
import { Account } from "../types/account.js";
const formNewTransaction = document.querySelector(".block-nova-transacao form");
formNewTransaction.addEventListener("submit", (event) => {
    event.preventDefault();
    const inputTransactionType = document.querySelector("#tipoTransacao");
    const inputValue = document.querySelector("#valor");
    const inputDate = document.querySelector("#data");
    const transctionType = inputTransactionType.value;
    const date = new Date(inputDate.value);
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
    formNewTransaction.reset();
});
