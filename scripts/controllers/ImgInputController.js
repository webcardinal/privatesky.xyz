const { WccController } = WebCardinal.controllers;

export default class ImgInputController extends WccController {
    constructor(element) {
        super(element);

        this.setModel({
            placeholder: "Click to choose an image",
            alt: "image input component",
            label: "Image Input Component",
            eventName: "img-input"
        });

        this.on("img-input", (event) => {
            this.image = event.data;
            this.model.setChainValue("src", this.image);
        });
    }
}