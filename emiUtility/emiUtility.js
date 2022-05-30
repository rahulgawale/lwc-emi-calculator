function emiCalculator(principal, interest, tenure) {
    let rate = interest / (12 * 100);
    let ans =
        (principal * (rate * Math.pow(1 + rate, tenure))) /
        (Math.pow(1 + rate, tenure) - 1);
    return ans;
}

function yearToMonths(year) {
    return year * 12;
}

function monthsToYear(months) {
    return parseInt(months / 12, 10);
}
export { emiCalculator, yearToMonths, monthsToYear };