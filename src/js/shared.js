function mandarError(feedback, msg = 'Error') {
    feedback.innerHTML = `<span style="color: red">${msg}</span>`;
}

function validarCorreo(usr) {
    const valMail = /^\S+@\S+\.\S+$/;
    return String(usr)
        .toLowerCase()
        .match(valMail)
}

export {mandarError, validarCorreo};