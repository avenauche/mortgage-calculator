const assert = require('assert');
const mortgageCalculator = require('../src/index.js');

console.log('Running CommonJS tests...');

// Test monthly payment calculation
const monthlyPayment = mortgageCalculator.calculateMonthlyPayment(300000, 3.5, 30);
assert.ok(Math.abs(monthlyPayment - 1347.13) < 0.01, 'Monthly payment calculation failed');
console.log('✓ Monthly payment test passed');

// Test total payment calculation
const totalPayment = mortgageCalculator.calculateTotalPayment(1347.13, 30);
assert.ok(Math.abs(totalPayment - 484966.80) < 0.01, 'Total payment calculation failed');
console.log('✓ Total payment test passed');

// Test total interest calculation
const totalInterest = mortgageCalculator.calculateTotalInterest(300000, 1347.13, 30);
assert.ok(Math.abs(totalInterest - 184966.80) < 0.01, 'Total interest calculation failed');
console.log('✓ Total interest test passed');

console.log('All CommonJS tests passed!\n');