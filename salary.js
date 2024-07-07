// Function to calculate net salary
function calculateNetSalary(basicSalary, benefits) {
    const grossSalary = basicSalary + benefits;

    // PAYE Tax Calculation
    let payeTax;
    if (grossSalary <= 24000) {
        payeTax = grossSalary * 0.10;
    } else if (grossSalary <= 32333) {
        payeTax = (24000 * 0.10) + ((grossSalary - 24000) * 0.25);
    } else if (grossSalary <= 500000) {
        payeTax = (24000 * 0.10) + (8333 * 0.25) + ((grossSalary - 32333) * 0.30);
    } else if (grossSalary <= 800000) {
        payeTax = (24000 * 0.10) + (8333 * 0.25) + (467667 * 0.30) + ((grossSalary - 500000) * 0.325);
    } else {
        payeTax = (24000 * 0.10) + (8333 * 0.25) + (467667 * 0.30) + (300000 * 0.325) + ((grossSalary - 800000) * 0.35);
    }

    // NHIF Calculation
    let nhif;
    if (grossSalary <= 5999) nhif = 150;
    else if (grossSalary <= 7999) nhif = 300;
    else if (grossSalary <= 11999) nhif = 400;
    else if (grossSalary <= 14999) nhif = 500;
    else if (grossSalary <= 19999) nhif = 600;
    else if (grossSalary <= 24999) nhif = 750;
    else if (grossSalary <= 29999) nhif = 850;
    else if (grossSalary <= 34999) nhif = 900;
    else if (grossSalary <= 39999) nhif = 950;
    else if (grossSalary <= 44999) nhif = 1000;
    else if (grossSalary <= 49999) nhif = 1100;
    else if (grossSalary <= 59999) nhif = 1200;
    else if (grossSalary <= 69999) nhif = 1300;
    else if (grossSalary <= 79999) nhif = 1400;
    else if (grossSalary <= 89999) nhif = 1500;
    else if (grossSalary <= 99999) nhif = 1600;
    else nhif = 1700;

    // NSSF Calculation
    const nssf = (Math.min(grossSalary, 7000) * 0.06) + (Math.min(Math.max(grossSalary - 7000, 0), 29000) * 0.06);

    // Net Salary Calculation
    const netSalary = grossSalary - payeTax - nhif - nssf;

    return {
        grossSalary: grossSalary,
        payeTax: payeTax,
        nhif: nhif,
        nssf: nssf,
        netSalary: netSalary
    };
}

// Get user input using browser prompts
const basicSalaryInput = prompt('Enter your basic salary:');
const benefitsInput = prompt('Enter your benefits:');

// Convert inputs to numbers
const basicSalary = parseFloat(basicSalaryInput);
const benefits = parseFloat(benefitsInput);

// Calculate net salary
const salaryDetails = calculateNetSalary(basicSalary, benefits);

// Output results
alert(`Gross Salary: ${salaryDetails.grossSalary}\nPAYE 
    Tax: ${salaryDetails.payeTax}\nNHIF: ${salaryDetails.nhif}\nNSSF: ${salaryDetails.nssf}\nNet Salary: ${salaryDetails.netSalary}`);