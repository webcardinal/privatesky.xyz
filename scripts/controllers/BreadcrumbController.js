import ContainerController from '/cardinal/base/controllers/ContainerController.js';

export default class BreadcrumbController extends ContainerController {
    constructor(element) {
        super(element);
        const initialModel = this.getInitialModel();
        this.model = this.setModel(initialModel);

        /**
         * Default event-name for psk-breadcrumb-navigator component
         */
        this.on("breadcrumb-click", (event) => {
            // Avoid bubbling
            event.stopImmediatePropagation();

            const path = event.data;
            // Handle navigation

            console.log(path);
        });

        /**
         * Custom event-name for psk-breadcrumb-navigator component
         */
        this.on("navigation-click", (event) => {
            // Avoid bubbling
            event.stopImmediatePropagation();

            const path = event.data;
            // Handle navigation

            console.log(path);
        });
    }

    getInitialModel = () => {
        return {
            segments: [{
                    label: "ROOT",
                    path: "/"
                },
                {
                    label: "ISO 9001",
                    path: "/iso-9001"
                },
                {
                    label: "Standard Documentation",
                    path: "/iso-9001/standard-documentation"
                },
                {
                    label: "Procedures",
                    path: "/iso-9001/standard-documentation/procedures"
                },
                {
                    label: "Operational Procedures",
                    path: "/iso-9001/standard-documentation/procedures/operational-procedures"
                },
                {
                    label: "Product Aceptance by the Customer",
                    path: "/iso-9001/standard-documentation/procedures/operational-procedures/product-acceptace-by-customer"
                }
            ]
        }
    }
}