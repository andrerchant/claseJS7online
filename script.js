const server = new mockServer();

const formEl = document.querySelector('#formulario');
const userEl = formEl.querySelector('#user');
const passEl = formEl.querySelector('#pass');
const feedback = formEl.querySelector('#feedback');

formEl.addEventListener('submit', submitirEvento);

function submitirEvento(event){
    event.preventDefault();
    
    const usuario = userEl.value;
    const password = passEl.value;

    validacion(usuario, password);
}

function validacion(user, pass) {
    if (!Boolean(user) && !Boolean(validarCorreo(user))) {
        mandarError('Tu correo no es válido');
        return;
    } 

    if(!Boolean(pass)) {
        mandarError('Contraseña incorrecta');
        return;
    }

    login(user);
}

function mandarError(msg = 'Error') {
    feedback.innerHTML = `<span style="color: red">${msg}</span>`;
}

function validarCorreo(usr) {
    const valMail = /^\S+@\S+\.\S+$/;
    return String(usr)
        .toLowerCase()
        .match(valMail)
}

function login(user) {
    alert(`Bienvenido ${user}`);
    mandarError('');
}