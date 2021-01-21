const { Controller } = WebCardinal.controllers;

class AttachmentsController extends Controller {
    initModel = _ => ({
        attachments: [
            {
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
    })

    constructor(element) {
        super(element);
        this.setModel(this.initModel());
    }
}

export default AttachmentsController;