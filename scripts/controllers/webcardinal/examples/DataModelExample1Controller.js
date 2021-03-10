const { WebcController } = WebCardinal.controllers;

class DataModelExample1Controller extends WebcController {
    initializeModel = () => ({
        divModel: {
            content: `Hello "data-model"!`,
            class: 'example-class',
            id: 'example-id',
            tag: 'example-tag', // "data-tag" attribute of WebCardinal
            'data-custom': 'example-data',
        }
    })

    constructor(element, history) {
        super(element, history);
        this.setModel(this.initializeModel());
    }
}

export default DataModelExample1Controller;