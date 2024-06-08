// Obtenemos elementos
const form = document.querySelector("form");
const tableBody = document.getElementById("table-body");
const totalPaymentDiv = document.getElementById("total-payment"); 

// Listener
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const loanAmount = parseFloat(document.getElementById("loan-amount").value);
  const interesRate = parseFloat(document.getElementById("interes-rate").value) / 100; // Convertir a decimal
  const loanTerm = parseFloat(document.getElementById("loan-term").value) * 12; // Convertir años a meses
  const payment = calculatePayment(loanAmount, interesRate, loanTerm);
  tableBody.innerHTML = "";

  let balance = loanAmount;
  let totalPaid = 0; 

  for (let i = 1; i <= loanTerm; i++) {
    const row = document.createElement("tr");
    const interest = balance * interesRate / 12; // Calcular interés mensual
    const principal = payment - interest;
    balance -= principal;
    const year = Math.floor((i - 1) / 12) + 1;
    const month = i % 12 === 0 ? 12 : i % 12;

    row.innerHTML = `
      <td>${year}</td>
      <td>${month}</td>
      <td>${payment.toFixed(2)}</td>
      <td>${interest.toFixed(2)}</td>
      <td>${balance.toFixed(2)}</td>
    `;
    tableBody.appendChild(row);

    totalPaid += payment; // Acumular el pago mensual en el total pagado
  }

  // Mostrar el monto total pagado
  totalPaymentDiv.innerHTML = `Monto total pagado: $${totalPaid.toFixed(2)}`;
});

function calculatePayment(loanAmount, interesRate, loanTerm) {
  const monthlyInterestRate = interesRate / 12;
  const factor = (1 + monthlyInterestRate) ** loanTerm;
  return loanAmount * monthlyInterestRate * factor / (factor - 1);
}
