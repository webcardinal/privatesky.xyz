import ContainerController from "../../../cardinal/controllers/base-controllers/ContainerController.js";

const model = {
    form: {
        email: {
            label: 'Email',
            name: 'email',
            isValid: true
        }
    }
};

export default class ExampleController extends ContainerController {
    constructor(element) {
        super(element);
        this.model = this.setModel(JSON.parse(JSON.stringify(model)));
        this.feedbackEmitter = null;
        
        // Listen for the 'openFeedback' event to receive a handle to the
        // Feedback List emitter
        this.on('openFeedback', (e) => {
            e.preventDefault();
            e.stopImmediatePropagation();
            this.feedbackEmitter = e.detail;
            console.log("okay!")
        });
        this.on("show-example", (e) => {
            e.preventDefault();
            e.stopImmediatePropagation();
            if(typeof this.feedbackEmitter === 'function'){
                if(e.data === 'toast'){
                    this.feedbackEmitter(`A toast example where you can see even the stackable property`,`${e.data} example`,e.data)
                } else {
                    this.feedbackEmitter(`${e.data} example`,`${e.data} example`,e.data)

                }
            }
        });
        
        this.on("alerts-pool-test", (e) => {
            e.preventDefault();
            e.stopImmediatePropagation();
            let alerts= e.data.split(',')
            if(typeof this.feedbackEmitter === 'function'){
                this.feedbackEmitter(`There was a problem with the confirmation`,`${alerts[1]} example`,alerts[1]);
                setTimeout(() => {
                    this.feedbackEmitter(`The register failed because the credentials you entered are faulty.`,`Problem Description`,alerts[0]);
                }, 2000);
        } 
        });
        this.on("show-feedback",(e) =>{
            e.preventDefault();
            e.stopImmediatePropagation();

            const emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
            const emailValue = this.model.form.email.value;
            this.model.form.email.isValid = emailRegex.test(emailValue);

            if(typeof this.feedbackEmitter === 'function'){
                if(this.model.form.email.isValid){
                    this.feedbackEmitter("Email is valid!","Mail Validation","alert-success")
                } else {
                    this.feedbackEmitter("Email is invalid!","Mail Validation","alert-danger")
                }
            }
        })
        // Show an error when something happens
        element.addEventListener('validation-error', (e) => {
            const errorMessage = e.detail;
            // Send the actual message
            this.feedbackEmitter(errorMessage, 'Validation Error', 'alert-danger');
        });
    }
}