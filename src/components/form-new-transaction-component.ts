import { Transaction } from "../types/transaction.js";
import { TransactionType } from "../types/transaction-type.js";
import { formatCurrency } from "../parsers/format-currency.js";
import { getBalance, updateBalance } from "./balance-component.js";

const formNewTransaction = document.querySelector(".block-nova-transacao form") as HTMLFormElement;

formNewTransaction.addEventListener("submit" , (event) : void => {
  event.preventDefault();

  if (!formNewTransaction.checkValidity()) {
    alert("Please check your new transaction input values and try again.");
    return;
  }

  const inputTransactionType = document.querySelector("#tipoTransacao") as HTMLSelectElement;
  const inputValue = document.querySelector("#valor") as HTMLInputElement;
  const inputDate = document.querySelector("#data") as HTMLInputElement;

  let transctionType: TransactionType = inputTransactionType.value as TransactionType;
  let date: Date = new Date(inputDate.value)
  let balance: number = getBalance();

  const newTransaction: Transaction = {
    type: transctionType,
    value: inputValue.valueAsNumber,
    date: date
  }

  if (newTransaction.type === TransactionType.DEPOSIT) {
    balance += newTransaction.value;
  } else if (newTransaction.type === TransactionType.TRANSFER ||
      newTransaction.type === TransactionType.BOLETO_PAYMENT) {
    balance -= newTransaction.value;
  } else {
    alert("Please check your transaction type and try again.");
  }

  updateBalance(balance);

  formNewTransaction.reset();
});