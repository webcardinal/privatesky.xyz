const { WebcController } = WebCardinal.controllers;

const TAB_MIN_VALUE = 0;
const TAB_MAX_VALUE = 4;

class PskTabNavigatorController extends WebcController {
    initializeModel = () => ({
        tabNavigator: {
            selected: 2,
            tabNavigationDisabled: true
        }
    })

    constructor(element, history) {
        super(element, history);

        this.setModel(this.initializeModel());

        this.on('prev', () => {
            let currentIndexSelected = this.model.tabNavigator.selected;
            if (currentIndexSelected > TAB_MIN_VALUE) {
                this.model.tabNavigator.selected = currentIndexSelected - 1;
            }
        });

        this.on('next', () => {
            let currentIndexSelected = this.model.tabNavigator.selected;
            if (currentIndexSelected < TAB_MAX_VALUE) {
                this.model.tabNavigator.selected = currentIndexSelected + 1;
            }
        });
    }
}

export default PskTabNavigatorController;