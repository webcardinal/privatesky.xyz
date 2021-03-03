const { WebcController } = WebCardinal.controllers;

const model = {
    name: {
        name: "name",
        placeholder: "name",
    },
    description: {
        name: "description",
        placeholder: "Description",
    },
    addresses: [
        {
            name: "address1",
            placeholder: "Address",
        },
        {
            name: "address2",
            placeholder: "Address 2",
        },
    ],
};

export default class WebcFormsController extends WebcController {
    constructor(element, history) {
        super(element, history);
        this.setModel(JSON.parse(JSON.stringify(model)));

        this.onTagClick("submit", () => {
            const formData = this.model.toObject("name");
            console.log("submitted", formData);
        });

        this.model.addExpression(
            "modeString",
            () => JSON.stringify(this.model.toObject(), null, 2),
            "name",
            "addresses",
            "description"
        );
    }
}
