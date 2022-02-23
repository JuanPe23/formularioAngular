import { LoginService } from 'src/app/service/login.service';
import { LoginModel } from './model/loginModel';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ejercicio1-angular';

  usuario!: LoginModel | null;

  constructor(private loginService: LoginService) {
    loginService.login.subscribe(usuario => this.usuario = usuario);
  }

  hayUsuario(): boolean {
    return this.usuario != null;
  }

  logout():void{
    this.loginService.performLogout();
  }


}
