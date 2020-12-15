import ContainerController from '/cardinal/base/controllers/ContainerController.js';

class MobileController extends ContainerController {
    getModel() {
        return {
            footer: [
                { name: 'Home', icon: 'home', page: 'pages/home' },
                { name: 'Tasks', icon: 'tasks', page: 'pages/tasks' },
                { name: 'History', icon: 'history', page: 'pages/history' },
                { name: 'Settings', icon: 'cog', page: 'pages/settings' }
            ],
            options: [
                { name: 'About', page: 'about' },
                { name: 'Glossary', page: 'glossary' }
            ],
            sidebar: [
                { name: 'Github' },
                { name: 'Android' },
                { name: 'iOS' }
            ]
        }
    }

    constructor(element) {
        // element === psk-mobile web component
        super(element);

        this.model = this.setModel(this.getModel());

        this.on("needMenuItems", e => {
            e.stopImmediatePropagation();
            const callback = e.detail;
            callback(null, this.model.sidebar);
        });

        this.on("showSidebar", async e => {
            e.stopImmediatePropagation();
            await element.toggleSidebar(true);
        });

        this.on("toggleOptions", async e => {
            e.stopImmediatePropagation();
            await element.toggleOptions();
        });
    }
}

export default MobileController;