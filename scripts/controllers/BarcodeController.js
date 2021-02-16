const { WebcController } = WebCardinal.controllers;

export default class BarcodeController extends WebcController {
	getModel() {
		return {
			isScannerActive: false,
			scannedData: ''
		}
	}

	constructor(element) {
		super(element);

		this.setModel(this.getModel());

		this.on("toggle-scanner", () => {
			this.model.isScannerActive = !this.model.isScannerActive;
			this.model.scannedData = '';
		});
	}
}
