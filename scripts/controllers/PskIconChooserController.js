import ContainerController from "../../cardinal/controllers/base-controllers/ContainerController.js";

const model = {
    iconSize: '20px',
    iconColor: 'red',
    iconValue: ''
};

export default class PskIconChooserController extends ContainerController {
    constructor(element) {
        super(element);
        this.model = this.setModel(model);
        this.model.onChange('iconValue', () => {
            // this.model.iconValue has the value of the icon you just selected.
            // Your code here.
        })
    }
}
