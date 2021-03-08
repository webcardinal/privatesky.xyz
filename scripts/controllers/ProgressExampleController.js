const { WebcController } = WebCardinal.controllers;

const model = {
    orangeProgressModel: {
        value: 80,
        max: 100,
        label: 'Orange',
        color: 'orange'
    },
    greenProgressModel: {
        value: 40,
        max: 100,
        label: 'Green',
        color: 'green'
    },
    blueProgressModel: {
        value: 60,
        max: 100,
        label: 'Blue',
        color: 'blue'
    }
}

export default class ProgressExampleController extends WebcController {
    constructor(element) {
        super(element);
        this.setModel(model);
        this.on('increase-progress', () => {
            this.model.orangeProgressModel.value++;
            this.model.greenProgressModel.value++;
            this.model.blueProgressModel.value++;
        });
    };
}