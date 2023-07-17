import {validarCorreo, mandarError} from './shared';

export class LoginService {
    // Referencias elementos DOM Login
    formEl = document.querySelector('#login-form');
    userEl = formEl.querySelector('#user');
    passEl = formEl.querySelector('#pass');
    feedback = formEl.querySelector('#feedback-login');

    constructor(server) {
        this.server = server;
    }

    init() {
        this.formEl.addEventListener('submit', submitirEvento);
    }


    submitirEvento(event) {
        event.preventDefault();

        const usuario = this.userEl.value;
        const password = this.passEl.value;

        this.validacion(usuario, password);
    }

    validacion(user, pass) {
        if (!Boolean(user) && !Boolean(validarCorreo(user))) {
            mandarError(this.feedback, 'Tu correo no es válido');
            return;
        }

        if (!Boolean(pass)) {
            mandarError(this.feedback, 'Contraseña incorrecta');
            return;
        }

        this.login(user);
    }

    login(user) {
        alert(`Bienvenido ${user}`);
        mandarError('');
    }
}