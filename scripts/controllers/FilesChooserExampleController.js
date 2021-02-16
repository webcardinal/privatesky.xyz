const { WebcController } = WebCardinal.controllers;

const model = {
    filesChooser: {
        label: "Select files",
        accept: "png",
        listFiles: true,
        filesAppend: true,
        files: []
    }
}

export default class FilesChooserExampleController extends WebcController {
    constructor(element) {
        super(element);
        this.setModel(JSON.parse(JSON.stringify(model)));
        this.model.onChange('filesChooser', () => {
            let filesArray = this.model.filesChooser.files || [];
        });
        this.on('add-file-folder', (event) => {
            let filesArray = event.data || [];
        });
    };
}
