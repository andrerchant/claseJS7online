import {mockedServer} from './server';
import { LoginService } from './login';
import { RegisterService } from './registrar';

(()=>{
    const server = new mockedServer();

    document.addEventListener('load', ()=>{
        const url = window.location.href;
        let service = null;

        if(url.includes('register')){
            service = new LoginService(server);
        } else {
            service = new RegisterService(server);
        }

        service.init();
    })
})()

