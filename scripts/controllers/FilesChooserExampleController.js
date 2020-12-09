import ContainerController from "../../cardinal/controllers/base-controllers/ContainerController.js";

const model = {
    filesChooser: {
        label: "Select files",
        accept: "png",
        listFiles: true,
        filesAppend: true,
        files: []
    }
}

export default class FilesChooserExampleController extends ContainerController {
    constructor(element) {
        super(element);
        this.model = this.setModel(JSON.parse(JSON.stringify(model)));
        this.model.onChange('filesChooser', () => {
            let filesArray = this.model.filesChooser.files || [];
        });
        this.on('add-file-folder', (event) => {
            let filesArray = event.data || [];
        });
    };
}
