import ContainerController from "../../cardinal/controllers/base-controllers/ContainerController.js";

const model = {
    name: {
        label: "Name",
        name: "name",
        required: true,
        placeholder: "Name here...",
        value: ''
    },
    description: {
        label: "Description",
        name: "description",
        required: true,
        placeholder: "Describe your Tender Offer",
        value: ''
    },
    email: {
        label: "Email ",
        name: "email",
        required: true,
        placeholder: "Email address here...",
        value: ''
    },
    age: {
        label: "Age",
        name: "age",
        required: true,
        placeholder:"Enter you age here...",
        value:''
    },
    address: {
        label: "Address",
        name: "address",
        required: true,
        placeholder:"Enter you address here...",
        value:''
    },
    password: {
        label: "Password",
        name: "password",
        required: true,
        placeholder: "Password here...",
        value: ''
    },
    startDate: {
        label: "START DATE",
        name: "date-to-start",
        required: false,
        value: ''
    },
    endDate: {
        label: "CLOSE DATE",
        name: "date-to-end",
        required: false,
        value: ''
    },
    formatedDate: {
        label: "FORMATED DATE",
        name: "date-to-format",
        required: false,
        value: '2322352464212',
        dataFormat:"MM YYYY DD",
        timestamp: "true"

    },
    number: {
        label: "Choose a number:",
        name: "number",
        required: true,
        value: '0'
    },
    gender: {
        label: "Select your gender",
        required: true,
        options: [{
                label: "Male",
                value: 'M'
            },
            {
                label: "Female",
                value: "F"
            }
        ],
        value: ''
    },
    terms: {
        label: "Do you accept our terms and conditions?",
        name: "terms",
        required: true,
        checkboxLabel: "Terms & Conditions",
        checkedValue: "yes",
        uncheckedValue: "no",
        value: ''
    }

}

export default class FormComponentExampleController extends ContainerController {
    constructor(element) {
        super(element);
        this.model = this.setModel(JSON.parse(JSON.stringify(model)));

        this.feedbackEmitter = null;

        this.on('openFeedback', (e) => {
            e.preventDefault();
            e.stopImmediatePropagation();
            this.feedbackEmitter = e.detail;
        });

        let dateSubmit = () => {
            let startDate = this.model.startDate.value
            let endDate = this.model.endDate.value
            if(startDate<=endDate){
                this.feedbackEmitter("You entered two valid dates, Thank you!","date-input Example","alert-success")
            } else {
                this.feedbackEmitter("The end date is before the start date, please review!","date-input Example","alert-danger")

            }
        }

        let emailSubmit = () => {
            let email = this.model.email.value
            if (email !== ""){
                this.feedbackEmitter(`The email you entered is : ${email}, Thank you!`,"email-input Example","alert-success")

            } else{
                this.feedbackEmitter("You have not entered an email, please enter one!","email-input Example","alert-danger")

            }
        }

        let rowSubmit = () => {
            let name = this.model.name.value;
            let email = this.model.email.value;
            if(name !== "" && email !==""){
                this.feedbackEmitter(`You successfully sent your data, Thank you!`,"row Example","alert-success")
            } else{
                this.feedbackEmitter("You have not entered a name or an email, please enter one!","row Example","alert-danger")

            }
        }
        let labelSubmit = () => {
            let name = this.model.name.value;
            let age = this.model.age.value;
            let address = this.model.address.value;
            if(name !== "" && age !=="" && address !==""){
                this.feedbackEmitter(`You successfully sent us your personal information, Thank you!`,"label Example","alert-success")
            } else{
                this.feedbackEmitter("You have not entered the name ,the age or the address, please enter one!","label Example","alert-danger")

            }
        }
        let numberSubmit = () => {
            let number = this.model.number.value;
            if (number<10){
                this.feedbackEmitter(`You entered a number between -infinite and 10, Thank you!`,"number Example","alert-success")

            } else if (number < 100){
                this.feedbackEmitter(`You entered a number between 10 and 100, Look at you go!`,"number Example","alert-warning")

            } else if (number < 1000){
                this.feedbackEmitter("You entered a nubmer between 100 and 1000,I think you shouldn't increase!","number Example","alert-danger")
            } else {
                this.feedbackEmitter(`The number you entered is : ${number}, Thank you!`,"number Example","alert-secondary")

            }
        }
        let passwordSubmit = () => {
            let password = this.model.password.value
            if(password === ''){
                this.feedbackEmitter(`We can't show you how the component works if you don't give us a password!`,"password Example","alert-danger")
            } else {
                this.feedbackEmitter(`We shouldn't show the password you just entered, but we will still do so : ${password} !`,"password Example","alert-primary")
            }

        }
        let radioSubmit = () => {
			let terms = this.model.terms.value;
            if(terms === ''){
                this.feedbackEmitter(`You need to accept the terms and conditions in order to move further!`,"radio Example","alert-danger")
            } else {
                this.feedbackEmitter(`Thank you for accepting the terms and conditions!`,"radio Example","alert-success")
            }
        }
        let formatedDateSubmit = () => {
            let date = this.model.formatedDate.value;
            if(date === ''){
                this.feedbackEmitter(`Please click on the calendar to select a date and see the example!`,"radio Example","alert-danger")
            } else {
                this.feedbackEmitter(`Thank you for trying out our framework,here is your date: ${date}!`,"radio Example","alert-success")
            }   
        }

        let textareaSubmit = () => {
            let description = this.model.description.value;
            console.log(this.model.description.value)
            if(description === ''){
                this.feedbackEmitter(`Please tell us how you feel about this component before submitting!`,"radio Example","alert-danger")
            } else {
                this.feedbackEmitter(`Thank you for this feedback : ${description}`,"radio Example","alert-success")
            }
        }

        this.on("Date submit",dateSubmit);
        this.on("Formated Date submit",formatedDateSubmit)
        this.on("Email submit",emailSubmit);
        this.on("Row submit",rowSubmit);
        this.on("Input submit",rowSubmit);
        this.on("Text submit",rowSubmit);
        this.on("Label submit",labelSubmit);
        this.on("Number submit",numberSubmit);
        this.on("Password submit",passwordSubmit);
        this.on("Radio submit",radioSubmit);
        this.on("Radio-group submit",radioSubmit);
        this.on("Textarea submit",textareaSubmit);
    }
}
