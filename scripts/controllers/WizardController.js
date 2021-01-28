const { WccController } = WebCardinal.controllers;

const model = {
    wizardSteps : [{
        stepName: 'Step 1',
        stepIndex: 0,
        stepComponent: 'psk-stepper-renderer'
    },{
        stepName: 'Step 2',
        stepIndex: 1,
        stepComponent: 'psk-stepper-renderer'
    },{
        stepName: 'Step 3',
        stepIndex: 2,
        stepComponent: 'psk-stepper-renderer'
    }]
}

export default class WizardController extends WccController {
    constructor(element) {
        super(element);
        this.setModel(JSON.parse(JSON.stringify(model)));

        let wizardConfiguration = null

        this.on('needWizardConfiguration',(e) => {
            e.preventDefault();
            e.stopImmediatePropagation();
            wizardConfiguration = e.detail;
            
            if(typeof wizardConfiguration === 'function'){
                console.log(this.model.wizardSteps[0])
                wizardConfiguration(this.model.wizardSteps)
            }
        })

    }
}