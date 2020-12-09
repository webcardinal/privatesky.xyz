import ContainerController from "../../cardinal/controllers/base-controllers/ContainerController.js";

export default class DocumentationModelController extends ContainerController {
    constructor(element) {
        super(element);
        this.model = this.setModel(this.getInitialModel());

        this.model.setChainValue("name.label", "Enter your name");
        this.model.name.placeholder = "Your name here...";

        this.model.surname.label = "Enter your surname"; // This will trigger the following error: Uncaught TypeError: Cannot read property 'label' of undefined 
        this.model.setChainValue("surname.label", "Enter your surname"); // This will create the key surname and will assign he value to label inside the model

        let name = this.model.getChainValue("name.value");

        this.model.onChange("email", () => {
            console.log(this.model.toObject("email")); // This will display the JavaScript object representation of the proxified sub-model email every time a value inside it has beed changed
        });
    }

    getInitialModel = () => {
        return {
            name: {
                label: "Name",
                name: "name",
                required: true,
                placeholder: "Name here...",
                value: 'John'
            },
            email: {
                label: "Email address",
                name: "email",
                required: true,
                placeholder: "Email address here...",
                value: 'john@privatesky.xyz'
            },
            age: {
                label: "Your age",
                name: "age",
                required: false,
                placeholder: "Your age here...",
                value: '20'
            }
        }
    }
}