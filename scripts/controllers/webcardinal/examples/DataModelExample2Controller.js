const { WebcController } = WebCardinal.controllers;

class DataModelExample1Controller extends WebcController {
    initializeModel = () => ({
        layout: {
            'template-columns': '1fr auto',
            'align-items-y': 'end',
            gap: '1rem',
            style: 'max-width: 600px; margin: 0 auto'
        },
        email: {
            label: 'Email',
            type: 'email',
            placeholder: 'john.doe@example.com'
        },
        subscribe: {
            label: 'Subscribe to our newsletter!',
            tag: 'subscribe'
        }
    })

    constructor(element, history) {
        super(element, history);
        this.setModel(this.initializeModel());
        this.onTagClick('subscribe', (_model, _target, _event) => {
           this.showModal('You are subscribed!', 'Thank you');
        });
    }
}

export default DataModelExample1Controller;