import { AuthguardGuard } from './guards/authguard.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { NuevasofertasComponent } from './pages/nuevasofertas/nuevasofertas.component';
import { OfertaComponent } from './pages/ofertas/oferta/oferta.component';
import { OfertasComponent } from './pages/ofertas/ofertas.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'ofertas',
    component: OfertasComponent,
    canActivate: [AuthguardGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'nuevasofertas',
    component: NuevasofertasComponent,
    canActivate: [AuthguardGuard]
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'oferta/:id',
    component: OfertaComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
