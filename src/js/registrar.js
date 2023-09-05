import { mockServer } from './server';
import { mandarError } from './shared';
import { ValidacionForm } from './validacion';

const server = new mockServer();

export class RegisterService {
    validacionForm;
    
    constructor(server) {
        this.server = server;
    }

    init() {
        // Referencias elementos DOM Login
        this.formEl = document.querySelector('#register-form');
        const feedback = this.formEl.querySelector('#feedback-registrar');

        this.userEl = this.formEl.querySelector('#user');
        this.passEl = this.formEl.querySelector('#pass');
        this.confirmPassEl = this.formEl.querySelector('#confirmPass');

        this.validacionForm = new ValidacionForm(feedback);
        
        this.formEl.addEventListener('submit', event => this.registerEvent(event));
        this.userEl.addEventListener('change', event => this.validacionForm.validarCorreo(event.target.value));
        this.passEl.addEventListener('change', event => this.validacionForm.validarPass(event.target.value));
        this.confirmPassEl.addEventListener('change', event => this.validacionForm.validarConfirmPass(event.target.value, this.passEl.value));
    }


    registerEvent(event) {
        event.preventDefault();
        const isFormValid = this.validacionForm.checkFormValidity();
        
        if(!isFormValid.length) this.register();
        else this.validacionForm.warn('Error en ' + isFormValid.toString())
    }


    register(user, pass, confirmPass) {
        alert(`Registrado ${user}`);
        this.validacionForm.cleanError()
    }
}