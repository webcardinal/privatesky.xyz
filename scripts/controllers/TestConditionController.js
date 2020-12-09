import ContainerController from "../../cardinal/controllers/base-controllers/ContainerController.js";

const model = {
    gdpr: 0,
    amount: 20,
    currency: '$',
    form: {
        wasSubmitted:false,
        email: {
            label: 'Email',
            name: 'email',
            isValid: true,
			value:""
        }
    }
};

export default class TestConditionController extends ContainerController {
    constructor(element) {
        super(element);
        this.model = this.setModel(JSON.parse(JSON.stringify(model)));

        // Create the "formHasErrors" expression
        this.model.addExpression('formHasErrors', function () {
            return !this.form.email.isValid;
        }, 'form.email.isValid'); // watch the "form.email.isValid" model chain
                                  // for changes in order to trigger re-evaluation

        this.model.addExpression('userFriendlyAmount', function () {
            if (this.currency === '$') {
                return `${this.currency}${this.amount}`;
            }

            return `${this.amount}${this.currency}`;
        }, 'amount', 'currency');

        this.on('toggle-property', (e) => {
            e.preventDefault();
            e.stopImmediatePropagation();

            const property = e.data;
            const value = this.model[property];
            this.model[property] = !value;
        })


        // "Validate Email" button click handler
        this.on('validate-email', (e) => {
            e.preventDefault();
            e.stopImmediatePropagation();
            if(this.model.form.wasSubmitted === false){
                this.model.form.wasSubmitted = true;
            }
            const emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
            const emailValue = this.model.form.email.value;
            this.model.form.email.isValid = emailRegex.test(emailValue);
        })

        // "Change Currency" button click handler
        this.on('change-currency', (e) => {
            e.preventDefault();
            e.stopImmediatePropagation();

            if (this.model.currency === '$') {
                this.model.currency = '€';
            } else {
                this.model.currency = '$';
            }
        })
    }
}
