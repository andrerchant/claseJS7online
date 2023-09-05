function mandarError(feedback, msg = 'Error') {
    feedback.innerHTML = `<span class="feedback"> ⚠️ ${msg}</span>`;
}

const LinkEnum = {
    HOME: 0,
    LOGIN: 1,
    REGISTER: 2   
}

export { mandarError, LinkEnum };