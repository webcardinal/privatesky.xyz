const { WebcController } = WebCardinal.controllers;

export default class TranslationsController extends WebcController {
    getModel = (_) => ({
        submitText: this.translate("submit"),
    });

    constructor(element, history) {
        super(element, history);

        this.setModel(this.getModel());
    }
}
