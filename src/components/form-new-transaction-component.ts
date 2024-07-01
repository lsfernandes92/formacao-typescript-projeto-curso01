import { Transaction } from "../types/transaction.js";
import { TransactionType } from "../types/transaction-type.js";
import { SaldoComponent } from "./balance-component.js";
import { Account } from "../types/account.js";

const formNewTransaction = document.querySelector(".block-nova-transacao form") as HTMLFormElement;

formNewTransaction.addEventListener("submit" , (event) : void => {
  event.preventDefault();

  const inputTransactionType = document.querySelector("#tipoTransacao") as HTMLSelectElement;
  const inputValue = document.querySelector("#valor") as HTMLInputElement;
  const inputDate = document.querySelector("#data") as HTMLInputElement;
  const transctionType: TransactionType = inputTransactionType.value as TransactionType;
  const date: Date = new Date(inputDate.value);

  if (!formNewTransaction.checkValidity()) {
    alert("Please check your new transaction input values and try again.");
    return;
  }

  const newTransaction: Transaction = {
    type: transctionType,
    value: inputValue.valueAsNumber,
    date: date
  }
  
  Account.registerTransaction(newTransaction);
  SaldoComponent.updateBalance(Account.getBalance());

  formNewTransaction.reset();
});