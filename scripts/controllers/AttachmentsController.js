import ContainerController from "../../../cardinal/controllers/base-controllers/ContainerController.js";
const model = {
    attachments: [{
        "name": "SomeDocument.docx",
        "size": 4545,
        "type": "plain/text"
    },
    {
        "name": "SomeDocument.pdf",
        "size": 564,
        "type": "plain/text"
    },
    {
        "name": "S44omeDocument.docx",
        "size": 9545,
        "type": "plain/text"
    },
    {
        "name": "MySecondDoc.pdf",
        "size": 56374,
        "type": "plain/text"
    },
    {
        "name": "S44omeDocument.docx",
        "size": 9545,
        "type": "plain/text"
    },
    {
        "name": "MySecondDoc.pdf",
        "size": 56374,
        "type": "plain/text"
    }
    ]
};
export default class AttachmentsController extends ContainerController {
    constructor(element) {
        super(element);
        this.model = this.setModel(JSON.parse(JSON.stringify(model)));
    }
}