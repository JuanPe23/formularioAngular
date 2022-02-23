import { Router } from '@angular/router';
import { LoginModel } from '../../model/loginModel';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  enviado: boolean = false;
  errorMsg!: string | null;
  isLoading: boolean = false;

  constructor(private formBuilder: FormBuilder,
    private loginService: LoginService,
    private router: Router) {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }
  //Ejecuta la accion de LOGIN.

  submitForm() {
    this.enviado = true;

    // Si no es valido, me voy.
    if (!this.loginForm.valid)
      return;

    let loginModel: LoginModel = new LoginModel(this.loginForm.controls.username.value, this.loginForm.controls.password.value, '');

    // Comienzo llamada back
    this.isLoading = true;
    this
      .loginService
      .performLogin(loginModel)
      .subscribe(
        respuesta => {
          console.log(JSON.stringify(respuesta));
          this.isLoading = false;
          this.errorMsg = null;
          this.router.navigate(['/ofertas']);
        }, error => {
          console.log('ERROR:' + JSON.stringify(error));
          this.errorMsg = `⚠️ ¡No se ha podido iniciar la sesión! (${error.error?.error})`
          this.isLoading = false;
        },
        () => {
          this.isLoading = false;
        });
  }


}