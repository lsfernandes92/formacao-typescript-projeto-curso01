let balance: number = 3000;

const lblBalance = document.querySelector(".saldo-valor .valor") as HTMLElement;
const formNewTransaction = document.querySelector(".block-nova-transacao form") as HTMLFormElement;

lblBalance.innerHTML = balance.toString();

formNewTransaction.addEventListener("submit" , (event) : void => {
  event.preventDefault();

  if (!formNewTransaction.checkValidity()) {
    alert("Please check your new transaction input values and try again.");
    return;
  }

  const inputTransactionType = document.querySelector("#tipoTransacao") as HTMLSelectElement;
  const inputValue = document.querySelector("#valor") as HTMLInputElement;
  const inputDate = document.querySelector("#data") as HTMLInputElement;

  const newTransaction = {
    type: inputTransactionType.value,
    value: inputValue.valueAsNumber,
    date: inputDate.value
  }

  if (newTransaction.type === "Depósito") {
    balance += newTransaction.value;
  } else if (newTransaction.type === "Transferência" 
    || newTransaction.type === "Pagamento de Boleto") {
    balance -= newTransaction.value;
  } else {
    alert("Please check your transaction type and try again.");
  }

  lblBalance.textContent = balance.toString();

  formNewTransaction.reset();
});