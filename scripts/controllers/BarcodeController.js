import ContainerController from '/cardinal/base/controllers/ContainerController.js';

export default class BarcodeController extends ContainerController {
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
