let balance = 3000;
const lblBalance = document.querySelector(".saldo-valor .valor");
const formNewTransaction = document.querySelector(".block-nova-transacao form");
lblBalance.innerHTML = balance.toString();
formNewTransaction.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!formNewTransaction.checkValidity()) {
        alert("Please check your new transaction input values and try again.");
        return;
    }
    const inputTransactionType = document.querySelector("#tipoTransacao");
    const inputValue = document.querySelector("#valor");
    const inputDate = document.querySelector("#data");
    const newTransaction = {
        type: inputTransactionType.value,
        value: inputValue.valueAsNumber,
        date: inputDate.value
    };
    if (newTransaction.type === "Depósito") {
        balance += newTransaction.value;
    }
    else if (newTransaction.type === "Transferência"
        || newTransaction.type === "Pagamento de Boleto") {
        balance -= newTransaction.value;
    }
    else {
        alert("Please check your transaction type and try again.");
    }
    lblBalance.textContent = balance.toString();
    formNewTransaction.reset();
});
