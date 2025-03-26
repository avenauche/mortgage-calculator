# @avenauche/mortgage-calculator

A mortgage calculator library that supports both ES6 modules and CommonJS, providing methods to calculate monthly payments, total payments, and total interest for mortgage loans.

## Installation

```bash
npm install @avenauche/mortgage-calculator
```

## Features
- Calculate monthly mortgage payments
- Calculate total payment over loan term
- Calculate total interest paid
- Generate an amortization schedule
- Supports both ES6 modules and CommonJS
- No external dependencies
- Lightweight and efficient

## Usage

### ES6 Modules
```javascript
import mortgageCalculator from '@avenauche/mortgage-calculator';

// Example: $300,000 loan at 3.5% APR for 30 years
const loanAmount = 300000;
const annualRate = 3.5;
const loanTermYears = 30;

// Calculate monthly payment
const monthlyPayment = mortgageCalculator.calculateMonthlyPayment(loanAmount, annualRate, loanTermYears);
console.log(`Monthly Payment: $${monthlyPayment}`); // $1,347.13

// Calculate total payment
const totalPayment = mortgageCalculator.calculateTotalPayment(monthlyPayment, loanTermYears);
console.log(`Total Payment: $${totalPayment}`); // $484,966.80

// Calculate total interest
const totalInterest = mortgageCalculator.calculateTotalInterest(loanAmount, monthlyPayment, loanTermYears);
console.log(`Total Interest: $${totalInterest}`); // $184,966.80
```

### CommonJS
```javascript
const mortgageCalculator = require('@avenauche/mortgage-calculator');

// Example: $300,000 loan at 3.5% APR for 30 years
const loanAmount = 300000;
const annualRate = 3.5;
const loanTermYears = 30;

// Calculate monthly payment
const monthlyPayment = mortgageCalculator.calculateMonthlyPayment(loanAmount, annualRate, loanTermYears);
console.log(`Monthly Payment: $${monthlyPayment}`); // $1,347.13

// Calculate total payment
const totalPayment = mortgageCalculator.calculateTotalPayment(monthlyPayment, loanTermYears);
console.log(`Total Payment: $${totalPayment}`); // $484,966.80

// Calculate total interest
const totalInterest = mortgageCalculator.calculateTotalInterest(loanAmount, monthlyPayment, loanTermYears);
console.log(`Total Interest: $${totalInterest}`); // $184,966.80
```

## API Reference

### calculateMonthlyPayment(principal, annualRate, years)
Calculate the monthly mortgage payment.

**Parameters:**
- `principal` *(number)* - The loan amount in dollars
- `annualRate` *(number)* - Annual interest rate as percentage (e.g., 3.5 for 3.5%)
- `years` *(number)* - Loan term in years

**Returns:**
- *(number)* - Monthly payment amount, rounded to 2 decimal places

### calculateTotalPayment(monthlyPayment, years)
Calculate the total amount paid over the loan term.

**Parameters:**
- `monthlyPayment` *(number)* - The monthly payment amount
- `years` *(number)* - Loan term in years

**Returns:**
- *(number)* - Total payment amount, rounded to 2 decimal places

### calculateTotalInterest(principal, monthlyPayment, years)
Calculate the total interest paid over the loan term.

**Parameters:**
- `principal` *(number)* - The original loan amount
- `monthlyPayment` *(number)* - The monthly payment amount
- `years` *(number)* - Loan term in years

**Returns:**
- *(number)* - Total interest paid, rounded to 2 decimal places

## License
This project is licensed under the MIT License.
