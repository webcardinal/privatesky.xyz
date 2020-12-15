import ContainerController from '/cardinal/base/controllers/ContainerController.js';

const model = {
    draggableListModel: {
        items: [
            {label: "Romanian", value: "ro", selected: true},
            {label: "English", value: "en"},
            {label: "German", value: "de"}
        ]
    }
}

export default class DraggableListExampleController extends ContainerController {
    constructor(element) {
        super(element);
        this.model = this.setModel(model);
        this.model.onChange('draggableListModel.items', () => {
            console.log('Order of the list changed', this.model.draggableListModel)
        });
    };
}
