const { WccController } = WebCardinal.controllers;

const model = {
    iconSize: '20px',
    iconColor: 'red',
    iconValue: ''
};

export default class PskIconChooserController extends WccController {
    constructor(element) {
        super(element);
        this.setModel(model);
        this.model.onChange('iconValue', () => {
            // this.model.iconValue has the value of the icon you just selected.
            // Your code here.
        })
    }
}
