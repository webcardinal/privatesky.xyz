import ContainerController from "../../cardinal/controllers/base-controllers/ContainerController.js";

const model = {
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
    subSection: {
        title: {
            label: "Personal information from sub-tree of a model"
        },
        otherInformation: {
            email: {
                label: "Email address",
                name: "email",
                required: true,
                placeholder: "Email address here...",
                value: ''
            },
            otherLabels: [{
                label: "Zero Label",
                subLabel: {
                    label: "Zero sub-label"
                }
            }, {
                label: "One Label"
            }, {
                label: "Two Label"
            }]
        }
    }
};

export default class TestFormChildrenController extends ContainerController {
    constructor(element) {
        super(element);
        this.model = this.setModel(JSON.parse(JSON.stringify(model)));
        
        this.feedbackEmitter = null;

        this.on('openFeedback', (e) => {
            e.preventDefault();
            e.stopImmediatePropagation();
            this.feedbackEmitter = e.detail;
        });

        let firstExample = () => {
            let name=this.model.name.value
            let email=this.model.subSection.otherInformation.email.value
            this.feedbackEmitter(`Hello there, ${name}, your email is: ${email}`,"First Form Example","toast")
        }

        this.on("First Example",firstExample)
    }
}
