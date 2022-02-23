import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { FormsModule,  ReactiveFormsModule } from '@angular/forms';
import { OfertasComponent } from './ofertas/ofertas.component';
import { OfertaComponent } from './ofertas/oferta/oferta.component';
import { NuevasofertasComponent } from './nuevasofertas/nuevasofertas.component';

@NgModule({
    declarations: [
        LoginComponent,
        HomeComponent,
        OfertasComponent,
        NuevasofertasComponent,
        OfertaComponent
    ],
    imports: [ 
        CommonModule,
        FormsModule,
        RouterModule,
       
        ReactiveFormsModule
     ],
    exports: [],
    providers: [],
})
export class PagesModule {}