// Referencias elementos DOM Login
const formEl = document.querySelector('#login-form');
const userEl = formEl.querySelector('#user');
const passEl = formEl.querySelector('#pass');
const feedback = formEl.querySelector('#feedback-login');

formEl.addEventListener('submit', submitirEvento);

function submitirEvento(event) {
    event.preventDefault();

    const usuario = userEl.value;
    const password = passEl.value;

    validacion(usuario, password);
}

function validacion(user, pass) {
    if (!Boolean(user) && !Boolean(validarCorreo(user))) {
        mandarError(feedback, 'Tu correo no es válido');
        return;
    }

    if (!Boolean(pass)) {
        mandarError(feedback, 'Contraseña incorrecta');
        return;
    }

    login(user);
}

function login(user) {
    alert(`Bienvenido ${user}`);
    mandarError('');
}