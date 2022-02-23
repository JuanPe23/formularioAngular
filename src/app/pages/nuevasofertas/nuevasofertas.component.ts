import { Router } from '@angular/router';
import { OffersForm } from './../../model/offersForm';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GestionOfertasService } from 'src/app/service/gestionofertas.service';

@Component({
  selector: 'app-nuevasofertas',
  templateUrl: './nuevasofertas.component.html',
  styleUrls: ['./nuevasofertas.component.css']
})
export class NuevasofertasComponent implements OnInit {

  offersModel = new OffersForm();



  constructor(private gestionOfertas: GestionOfertasService,
    private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm): void {

    this.offersModel.titulo = f.value.titulo;
    this.offersModel.descripcion = f.value.descripcion;
    this.offersModel.empresa = f.value.empresa;
    this.offersModel.salario = f.value.salario;
    this.offersModel.ciudad = f.value.ciudad;
    this.offersModel.email = f.value.email;


    this.gestionOfertas.createOffer(this.offersModel).subscribe(
      response => {

        console.log(JSON.stringify(response));
        this.router.navigate(['/ofertas']);
      },
      error => {
        console.log('Error ' + JSON.stringify(error));
      }
    )

  }

}

