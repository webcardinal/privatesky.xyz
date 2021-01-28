const { WccController } = WebCardinal.controllers;

const model = {
    draggableListModel: {
        items: [
            {label: "Romanian", value: "ro", selected: true},
            {label: "English", value: "en"},
            {label: "German", value: "de"}
        ]
    }
}

export default class DraggableListExampleController extends WccController {
    constructor(element) {
        super(element);
        this.setModel(model);
        this.model.onChange('draggableListModel.items', () => {
            console.log('Order of the list changed', this.model.draggableListModel)
        });
    };
}
