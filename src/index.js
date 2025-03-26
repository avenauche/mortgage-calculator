const MONTHS_IN_YEAR = 12;

const calculateMonthlyPayment = (principal, annualRate, years) => {
  const monthlyRate = annualRate / 100 / MONTHS_IN_YEAR;
  const numberOfPayments = years * MONTHS_IN_YEAR;
  
  if (monthlyRate === 0) {
    return Number((principal / numberOfPayments).toFixed(2));
  }
  
  const monthlyPayment = principal * 
    (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / 
    (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
  
  return Number(monthlyPayment.toFixed(2));
};

const calculateTotalPayment = (monthlyPayment, years) => 
  Number((monthlyPayment * years * MONTHS_IN_YEAR).toFixed(2));

const calculateTotalInterest = (principal, monthlyPayment, years) => 
  Number((calculateTotalPayment(monthlyPayment, years) - principal).toFixed(2));

const mortgageCalculator = {
  calculateMonthlyPayment,
  calculateTotalPayment,
  calculateTotalInterest
};

module.exports = mortgageCalculator;