import { mockServer } from './server';
import { validarCorreo, mandarError } from './shared';

const server = new mockServer();

export class RegisterService {
    formEl = document.querySelector('#register-form');
    userEl = formEl.querySelector('#user');
    passEl = formEl.querySelector('#pass');
    confirmPassEl = formEl.querySelector('#confirmPass');
    feedback = formEl.querySelector('#feedback-registrar');

    constructor(server) {
        this.server = server;
    }

    init() {
        this.formEl.addEventListener('submit', registerEvent);
    }


    registerEvent(event) {
        event.preventDefault();

        const user = this.userEl.value;
        const pass = this.passEl.value;
        const confirmPass = this.confirmPassEl.value;

        this.validacion(user, pass, confirmPass);
    }

    validacion(user, pass, confirmPass) {
        if (!Boolean(user) && !Boolean(validarCorreo(user))) {
            mandarError(this.feedback, 'Tu correo no es válido');
            return;
        }

        const valPass = new RegExp("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{6,}$");
        const isMatching = valPass.test(pass);

        if (!isMatching) {
            mandarError(this.feedback, `<ul>
                La contraseña debe:
                <li> Ser mayor a 6 caracteres.</li>
                <li> Tener al menos una letra. </li>
                <li> Tener al menos un número. </li>
            </ul>`);
            return;
        }

        if (pass !== confirmPass) {
            mandarError(this.feedback, `Las contraseñas deben coincidir`);
            return;
        }

        this.register(user, pass, confirmPass);
    }

    register(user, pass, confirmPass) {

    }
}