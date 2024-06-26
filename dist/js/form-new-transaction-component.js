const formNewTransaction = document.querySelector(".block-nova-transacao form");
formNewTransaction.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!formNewTransaction.checkValidity()) {
        alert("Please check your new transaction input values and try again.");
        return;
    }
    const inputTransactionType = document.querySelector("#tipoTransacao");
    const inputValue = document.querySelector("#valor");
    const inputDate = document.querySelector("#data");
    let transctionType = inputTransactionType.value;
    let date = new Date(inputDate.value);
    const newTransaction = {
        type: transctionType,
        value: inputValue.valueAsNumber,
        date: date
    };
    if (newTransaction.type === TransactionType.DEPOSIT) {
        balance += newTransaction.value;
    }
    else if (newTransaction.type === TransactionType.TRANSFER ||
        newTransaction.type === TransactionType.BOLETO_PAYMENT) {
        balance -= newTransaction.value;
    }
    else {
        alert("Please check your transaction type and try again.");
    }
    lblBalance.textContent = formatCurrency(balance);
    formNewTransaction.reset();
});
