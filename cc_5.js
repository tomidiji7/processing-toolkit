// employee list with hours and hourly rates
const employees = [
  { name: "Alice", hourlyRate: 20, hoursWorked: 42 },
  { name: "Bob", hourlyRate: 18, hoursWorked: 38 },
  { name: "Carmen", hourlyRate: 22, hoursWorked: 45 },
  { name: "David", hourlyRate: 19.5, hoursWorked: 40 }
];

// calculate regular pay (up to 40 hours only)
function calculateBasePay(rate, hours) {
  return rate * (hours > 40 ? 40 : hours);
}

// calculate overtime pay if hours are above 40
function calculateOvertimePay(rate, hours) {
  let overtime = hours > 40 ? hours - 40 : 0;
  return overtime * rate * 1.5;
}

// take out 15% taxes from gross pay
function calculateTaxes(gross) {
  return gross * 0.15;
}

// combine everything and return full payroll info
function processPayroll(employee) {
  let base = calculateBasePay(employee.hourlyRate, employee.hoursWorked);
  let overtime = calculateOvertimePay(employee.hourlyRate, employee.hoursWorked);
  let gross = base + overtime;
  let tax = calculateTaxes(gross);
  let net = gross - tax;

  return {
    name: employee.name,
    basePay: base.toFixed(2),
    overtimePay: overtime.toFixed(2),
    grossPay: gross.toFixed(2),
    netPay: net.toFixed(2)
  };
}

// loop through employees and show results
for (let emp of employees) {
  let result = processPayroll(emp);
  console.log(result);
}
