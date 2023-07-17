import { mockServer } from './js/server';
import { LoginService } from './js/login';
import { RegisterService } from './js/registrar';
import './style.css';

(()=>{
    const server = new mockServer();

    document.addEventListener('load', ()=>{
        const url = window.location.href;
        let service = null;

        console.log(url)

        if(url.includes('register')){
            service = new LoginService(server);
        } else {
            service = new RegisterService(server);
        }

        service.init();
    })
})()

