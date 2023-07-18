import './style.css';
import { mockServer } from './js/server';
import { LoginService } from './js/login';
import { RegisterService } from './js/registrar';
import { LinkEnum } from './js/shared';

(()=>{
    const server = new mockServer();

    window.addEventListener('DOMContentLoaded', () => {
        iniciar();
    })
    
    function iniciar() {
        let service = null;
        const url = window.location.href;
        
        if (url.includes('register')) {
            service = new RegisterService(server);
            markCurrentLink(LinkEnum.REGISTER);
        }
        else if (url.includes('login')) {
            service = new LoginService(server);
            markCurrentLink(LinkEnum.LOGIN);
        } else {
            markCurrentLink(LinkEnum.HOME);
            return;
        }
        
        service.init();
    }
    
    function markCurrentLink(NAME) {
        const CURRENT_PAGE = 'currentPage';
        const linksEl = document.querySelectorAll('nav a');
        
        for(const link of linksEl) {
            link.classList.remove(CURRENT_PAGE);
        }
        linksEl[NAME].classList.add(CURRENT_PAGE)
    }
})()

