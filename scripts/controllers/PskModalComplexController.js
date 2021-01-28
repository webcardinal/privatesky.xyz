import ModalController from '/cardinal/base/controllers/ModalController.js';

export default class PskModalComplexController extends ModalController {
    getModel() {
        return {
            title: 'PrivateSky portal',
            signIn: {
                email: {
                    label: 'Email',
                    placeholder: 'john.doe@privatesky.xyz'
                },
                password: { label: 'Password' },
                remember: {
                    checked: true,
                    checkboxLabel: 'Remember me?'
                }
            },
            signUp: {
                fullName: {
                    label: 'Full name',
                    placeholder: 'John Doe'
                },
                repeatPassword: { label: 'Repeat password' }
            },
            submit: { label: 'Continue' }
        }
    }

    constructor(element, history) {
        super(element, history);
        this.setModel(this.getModel());

        this.on('showModal', _ => {
            this.showModal('complex-modal', this.model, (err, preferences) => {
                if (err) {
                    console.error(err);
                    return;
                }
                console.log(preferences);
            });
        });
    }
}