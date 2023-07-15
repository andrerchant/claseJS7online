const formEl = document.querySelector('#register-form');
const userEl = formEl.querySelector('#user');
const passEl = formEl.querySelector('#pass');
const confirmPassEl = formEl.querySelector('#confirmPass');
const feedback = formEl.querySelector('#feedback-registrar');

formEl.addEventListener('submit', registerEvent);

function registerEvent(event) {
    event.preventDefault();

    const user = userEl.value;
    const pass = passEl.value;
    const confirmPass = confirmPassEl.value;

    validacion(user, pass, confirmPass);
}

function validacion(user, pass, confirmPass) {
    if (!Boolean(user) && !Boolean(validarCorreo(user))) {
        mandarError(feedback, 'Tu correo no es válido');
        return;
    }

    const valPass = new RegExp("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{6,}$");
    const isMatching = valPass.test(pass);

    if (!isMatching) {
        mandarError(feedback, `<ul>
            La contraseña debe:
            <li> Ser mayor a 6 caracteres.</li>
            <li> Tener al menos una letra. </li>
            <li> Tener al menos un número. </li>
        </ul>`);
        return;
    }

    if(pass !== confirmPass) {
        mandarError(feedback, `Las contraseñas deben coincidir`);
        return;
    }

    register(user, pass, confirmPass);
}

function register(user, pass, confirmPass) {

}