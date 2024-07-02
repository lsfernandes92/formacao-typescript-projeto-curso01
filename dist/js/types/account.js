import { TransactionType } from "./transaction-type.js";
let balance = JSON.parse(localStorage.getItem("balance")) || 0;
const transactions = JSON.parse(localStorage.getItem("transactions"), (key, value) => {
    if (key == "date") {
        return new Date(value);
    }
    return value;
}) || [];
const deposit = (value) => {
    if (value <= 0) {
        throw new Error("You must enter a value greater than 0 to deposit.");
    }
    balance += value;
    localStorage.setItem("balance", balance.toString());
};
const withdraw = (value) => {
    if (value <= 0) {
        throw new Error("You must enter a value greater than 0 to withdraw.");
    }
    if (value > balance) {
        throw new Error("Your balance is insufficient!");
    }
    balance -= value;
    localStorage.setItem("balance", balance.toString());
};
export const Account = {
    getBalance() {
        return balance;
    },
    getLoginDate() {
        return new Date();
    },
    getTransactionsGroup() {
        const transactionsGroup = [];
        const transactionsList = structuredClone(transactions);
        const sortedTransactions = transactionsList.sort((t1, t2) => t2.date.getTime() - t1.date.getTime());
        let labelCurrentTransactionGroup = "";
        for (let transaction of sortedTransactions) {
            let labelTransactionGroup = transaction.date.toLocaleDateString("pt-BR", { month: "long", year: "numeric" });
            if (labelCurrentTransactionGroup !== labelTransactionGroup) {
                labelCurrentTransactionGroup = labelTransactionGroup;
                transactionsGroup.push({
                    label: labelTransactionGroup,
                    transactions: []
                });
            }
            transactionsGroup.at(-1).transactions.push(transaction);
        }
        return transactionsGroup;
    },
    registerTransaction(transaction) {
        if (transaction.type === TransactionType.DEPOSIT) {
            deposit(transaction.value);
        }
        else if (transaction.type === TransactionType.TRANSFER ||
            transaction.type === TransactionType.BOLETO_PAYMENT) {
            withdraw(transaction.value);
            transaction.value *= -1;
        }
        else {
            alert("Please check your transaction type and try again.");
        }
        transactions.push(transaction);
        console.log(this.getTransactionsGroup());
        localStorage.setItem("transactions", JSON.stringify(transactions));
    }
};
