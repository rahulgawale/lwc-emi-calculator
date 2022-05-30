import { LightningElement } from "lwc";

import { emiCalculator, yearToMonths, monthsToYear } from "c/emiUtility";
export default class EmiCalculator extends LightningElement {
    principal = 100000;
    interest = 10;
    tenure = 120;
    emi = 0;
    tenureInMonths = true;

    connectedCallback() {
        this.calculate();
    }

    handleChange(event) {
        this[event.target.name] = event.target.value;
        this.calculate();
    }

    handleMonthToggle(event) {
        this.tenureInMonths = event.target.checked;
        if (this.tenureInMonths) {
            // convert to months
            this.tenure = yearToMonths(this.tenure);
            console.log("converted to months", this.tenure);
        } else {
            // already in months so convert to years
            this.tenure = monthsToYear(this.tenure);
            console.log("converted to years", this.tenure);
        }
        this.calculate();
    }

    calculate() {
        this.emi = emiCalculator(
            this.principal,
            this.interest,
            this.tenureInMonths ? this.tenure : yearToMonths(this.tenure)
        );
    }
}
