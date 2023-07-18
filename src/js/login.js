import { mandarError } from './shared';
import { ValidacionForm } from './validacion';

export class LoginService {
    validacionForm;
    
    constructor(server) {
        this.server = server;
    }
    
    init() {
        // Referencias elementos DOM Login
        this.formEl = document.querySelector('#login-form');
        const feedback = document.querySelector('#feedback-login');
        this.userEl = document.querySelector('#user');
        this.passEl = document.querySelector('#pass');

        this.validacionForm = new ValidacionForm(feedback);

        this.formEl.addEventListener('submit', event => this.submitirEvento(event));
        this.userEl.addEventListener('change', event => this.validacionForm.validarCorreo(event.target.value));
        this.passEl.addEventListener('change', event => this.validacionForm.validarPass(event.target.value, true));
    }


    submitirEvento(event) {
        event.preventDefault();
        const user = this.userEl.value;
        const password = this.passEl.value;
        const isFormValid = this.validacionForm.checkFormValidity();

        if (!isFormValid.length) this.validarDatosLogin(user, password);
        else this.validacionForm.warn('Error en ' + isFormValid.toString())
    }

    /**
     * 
     * @todo Conectar con server y confirmar password de usuario
     * @param {string} user 
     * @param {string} pass 
     */
    validarDatosLogin(user, pass) {
        this.login(user);
    }

    login(user) {
        alert(`Bienvenido ${user}`);
        this.validacionForm.cleanError()
    }
}