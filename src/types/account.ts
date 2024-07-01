import { TransactionType } from "./transaction-type.js";
import { Transaction } from "./transaction.js";

let balance: number = 3000;

export const Account = {
  getBalance(): number {
    return balance;
  },

  getLoginDate(): Date {
    return new Date();
  },

  registerTransaction(transaction: Transaction): void {
    if (transaction.type === TransactionType.DEPOSIT) {
      balance += transaction.value;
    } else if (transaction.type === TransactionType.TRANSFER ||
        transaction.type === TransactionType.BOLETO_PAYMENT) {
      balance -= transaction.value;
    } else {
      alert("Please check your transaction type and try again.");
    }
  }
};