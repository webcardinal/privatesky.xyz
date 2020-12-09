import ContainerController from "../../cardinal/controllers/base-controllers/ContainerController.js";

export default class ImgInputController extends ContainerController {
    constructor(element) {
        super(element);

        this.model = this.setModel({
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