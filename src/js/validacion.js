import { mensajes } from './errorMsg';
import { mandarError } from './shared';

const formFields = {
    MAIL: 'correo',
    PASS: 'contraseña',
    CONFIRM_PASS: 'confirmación de contraseña'
}

export class ValidacionForm {
    // Regular Expressions
    RegExp_mail = /^\S+@\S+\.\S+$/; // versión acortada
    RegExp_pass = new RegExp("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{6,}$"); // versión completa
    errorsObj = {};

    constructor(feedback) {
        this.feedbackEl = feedback;
    }

    validarFormatoCorreo(usr) {
        return String(usr)
            .toLowerCase()
            .match(this.RegExp_mail)
    }

    validarCorreo(user) {
        if (!user || !this.validarFormatoCorreo(user)) {
            this.warn(!!user ? mensajes.VALID_USER : mensajes.USER);
            this.errorsObj[formFields.MAIL] = true;
            return;
        }
        else {
            this.errorsObj[formFields.MAIL] = false;
            this.cleanError();
        }
    }

    validarPass(pass, isLogin = false) {
        const isMatching = this.RegExp_pass.test(pass);

        if (!isMatching || !pass) {
            const msg = isLogin || !pass ? mensajes.PASS : mensajes.VALID_PASS;
            this.warn(msg);
            this.errorsObj[formFields.PASS] = true;
            return;
        }
        else {
            this.errorsObj[formFields.PASS] = false;
            this.cleanError();
        }
    }

    validarConfirmPass(confirmPass, pass) {
        if (pass !== confirmPass) {
            this.warn(mensajes.CONFRM_PASS);
            this.errorsObj[formFields.CONFIRM_PASS] = true;
            return;
        }
        else {
            this.errorsObj[formFields.CONFIRM_PASS] = false;
            this.cleanError();
        }
    }

    /**
     * Revisa que el formulario sea válido
     * @returns {string[]} Array con el nombre del campo con errores en el formulatio
     */
    checkFormValidity() {
        return Object.entries(this.errorsObj)
            .filter(([,val])=> Boolean(val))
            .map(([key])=> key)
    }

    warn(msg) {
        mandarError(this.feedbackEl, msg);
    }

    cleanError() {
        this.feedbackEl.innerHTML = '';
    }
}