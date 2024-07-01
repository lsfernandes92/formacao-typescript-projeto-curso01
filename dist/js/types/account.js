import { TransactionType } from "./transaction-type.js";
let balance = 3000;
export const Account = {
    getBalance() {
        return balance;
    },
    getLoginDate() {
        return new Date();
    },
    registerTransaction(transaction) {
        if (transaction.type === TransactionType.DEPOSIT) {
            balance += transaction.value;
        }
        else if (transaction.type === TransactionType.TRANSFER ||
            transaction.type === TransactionType.BOLETO_PAYMENT) {
            balance -= transaction.value;
        }
        else {
            alert("Please check your transaction type and try again.");
        }
    }
};
