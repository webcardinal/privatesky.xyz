import ContainerController from "../../cardinal/controllers/base-controllers/ContainerController.js";

const model = {
    entities: [{
        sectionTitle: {
            label: "Your personal information"
        },
        name: {
            label: "Name",
            name: "name",
            required: true,
            placeholder: "Name here...",
            value: ''
        },
        email: {
            label: "Email address",
            name: "email",
            required: true,
            placeholder: "Email address here...",
            value: ''
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
            ]
        },
        nationality: {
            label: "Select your nationality",
            placeholder: "Please select one option...",
            required: true,
            options: [{
                label: "Romanian",
                value: "RO"
            }, {
                label: "Italian",
                value: "IT"
            }, {
                label: "English",
                value: "EN"
            }]
        }
    }, {
        sectionTitle: {
            label: "Your associate personal information"
        },
        name: {
            label: "Associate Name",
            name: "name",
            required: true,
            placeholder: "Name here...",
            value: ''
        },
        email: {
            label: "Associate email address",
            name: "email",
            required: true,
            placeholder: "Email address here...",
            value: ''
        },
        gender: {
            label: "Associate gender",
            required: true,
            options: [{
                    label: "Male",
                    value: 'M'
                },
                {
                    label: "Female",
                    value: "F"
                }
            ]
        },
        nationality: {
            label: "Associate nationality",
            placeholder: "Please select one option...",
            required: true,
            options: [{
                label: "Romanian",
                value: "RO"
            }, {
                label: "German",
                value: "DE"
            }, {
                label: "Italian"
            }]
        }
    }],
    gdpr: {
        label: "Check if you agree with GDPR regulations",
        name: "gdpr",
        required: true,
        checkboxLabel: "GDPR Consent",
        checkedValue: "true",
        uncheckedValue: "false",
        value:false
    },
    terms: {
        label: "Do you accept our terms and conditions?",
        name: "terms",
        required: true,
        checkboxLabel: "Terms & Conditions",
        checkedValue: "yes",
        uncheckedValue: "no"
    }
}

export default class TestFormForEachController extends ContainerController {
    constructor(element) {
        super(element);
        this.model = this.setModel(JSON.parse(JSON.stringify(model)));
 
        this.feedbackEmitter = null;

        this.on('openFeedback', (e) => {
            e.preventDefault();
            e.stopImmediatePropagation();
            this.feedbackEmitter = e.detail;
        });
        
        let thirdExample = () => {
           this.model.entities.forEach(entity => {
                let name=entity.name.value;
                let email=entity.email.value;
                let gender=entity.gender.value;
                let nationality=entity.nationality.value;
                setTimeout(()=> {
                    this.feedbackEmitter(`Good day to you mister ${name}, we hope your email is ${email} so we can send you an email.`,`For Each Example`,"toast")
                },400)
           });
        }

        let forEachSubmit = () => {
            this.model.entities.forEach(entity => {
                let name=entity.name.value;
                let email=entity.email.value;
                setTimeout(()=> {
                    this.feedbackEmitter(`Good day to you mister ${name}, we hope your email is ${email} so we can send you an email.`,`For Each Example`,"toast")
                },400)
            });
        }

        this.on("For Each Submit",forEachSubmit)
        this.on("Third Example",thirdExample)
    
    }
}
