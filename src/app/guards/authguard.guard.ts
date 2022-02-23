import { LoginModel } from './../model/loginModel';
import { LoginService } from 'src/app/service/login.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate {

  usuario!: LoginModel | null;

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (this.usuario === null) { 
      this.router.navigate(['/login']);
      return false; 
    }else {
      
      return true;
    }
  }

  constructor(private loginService: LoginService,
              private router: Router) {
    this.loginService.login.subscribe(usuario => {
      this.usuario = usuario;
    });
  }

}



