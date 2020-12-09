import ContainerController from "../../cardinal/controllers/base-controllers/ContainerController.js";

const model = {
    buttonStatus: "0",
    button: {
        label: "Disable Property Example",
        disabled: false
    },
    disabled: {
        label: "If you check the box and submit it, then the 'Disable Property Example' will become disabled, but if it is already disabled and you uncheck, then it will become active again",
        name: "disable",
        required: false,
        checkboxLabel: "Disable",
        checkedValue: "disabled",
        uncheckedValue: "not-disabled",
        value:""
    },
    opened: false
};

export default class ComponentsExampleController extends ContainerController {
    constructor(element) {
        super(element);
        this.model = this.setModel(JSON.parse(JSON.stringify(model)));
        console.log(this.model.disabled.value)
        this.feedbackEmitter = null;
        this.on('openFeedback', (e) => {
            e.preventDefault();
            e.stopImmediatePropagation();
            this.feedbackEmitter = e.detail;
        });

        this.model.addExpression('switchButtonState', function() {
            return this.buttonStatus;
        }, 'buttonStatus');

        this.on('toggle-property', (e) => {
            e.preventDefault();
            e.stopImmediatePropagation();
            const property = e.data;
            const value = this.model[property];
            this.model[property] = !value;
        })

        this.on("switch-invitation-type", (evt) => {
            evt.preventDefault();
            evt.stopImmediatePropagation();
            this.model.buttonStatus = (this.model.buttonStatus + 1) % 2;

        })

        this.on('add-file-folder',(evt) => {
            evt.preventDefault();
            evt.stopImmediatePropagation();
            let selectedFiles = evt.data;
            selectedFiles.forEach(file => {
                this.feedbackEmitter(`${file.name} has a size of ${file.size}`,`Psk-file-chooser in Psk-button-group example`,'toast')
            });
        })

        this.on("show-alert",(evt) => {
            evt.preventDefault();
            evt.stopImmediatePropagation();
            let typeOfAlert = evt.data
            this.feedbackEmitter(`You just ordered a special ${typeOfAlert}-alert, have fun with it!`,`${typeOfAlert}-alert Example`,`alert-${typeOfAlert}`)
        })

        this.on("send-user-data",(evt) => {
            evt.preventDefault();
            evt.stopImmediatePropagation();
            this.feedbackEmitter(`${evt.data}`,"Button Example","toast");
        })

        this.on("need-double-click",(evt) => {
            evt.preventDefault();
            evt.stopImmediatePropagation();
            this.feedbackEmitter(`${evt.data}`,"Double Click Example","alert-danger");
        })
        
        this.on("double-click-event",(evt) => {
            evt.preventDefault();
            evt.stopImmediatePropagation();
            setTimeout( ()=> {
                this.feedbackEmitter(`You really tried it out and it worked, Good Job!`,"Double Click Example","alert-success");
            },400)
        })
        this.on("Disable Button Submit",(evt) => {
            evt.preventDefault();
            evt.stopImmediatePropagation();
            if(this.model.disabled.value =="disabled"){
                this.model.button.disabled=true 
            } else {
                this.model.button.disabled=false;
            }
        })
        this.on("trigger-popup",(evt) => {
            evt.preventDefault();
            evt.stopImmediatePropagation();
            this.model.opened = 1;
        })
    }
}
