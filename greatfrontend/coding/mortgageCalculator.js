(function() {
    const mortageForm = document.getElementById("mortgageForm");
const monthlyMortgage = document.getElementById("monthlyMortgage");
const totalAmount = document.getElementById("totalAmount");
const totalInterest = document.getElementById("totalInterest");

mortageForm.addEventListener("submit", (e) => {
    e.preventDefault();
    // Get and convert input values.
    const formData = new FormData(mortageForm);
    const loanAmount = parseFloat(formData.get("loanAmount"));
    const monthlyInterestRate = parseFloat(formData.get("APR"))/100/12;
    const loanTermInMonths = parseFloat(formData.get("loanTerm"))*12;
    
    // Calculate monthly mortgage payment.
    const monthlyPayment =
      (loanAmount * monthlyInterestRate) /
      (1 -
        1 /
          Math.pow(
            1 + monthlyInterestRate,
            loanTermInMonths,
          ));

    // Calculate total payment amount.
    const totalPayment = monthlyPayment * loanTermInMonths;

    // Calculate total interest paid.
    const totalInterestPaid = totalPayment - loanAmount;

    const currencyFormatter = new Intl.NumberFormat(
      'en-US',
      {
        style: 'currency',
        currency: 'USD',
      },
    );

    // Set output values.
    monthlyMortgage.textContent =
      `Monthly mortgage payment: ${currencyFormatter.format(monthlyPayment)}`;
    totalAmount.textContent =
      `Total payment amount: ${currencyFormatter.format(totalPayment)}`;
    totalInterest.textContent =
      `Total interest paid: ${currencyFormatter.format(totalInterestPaid)}`;
})


})()