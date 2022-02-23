import { GestionOfertasService } from 'src/app/service/gestionofertas.service';
import { HomeService } from 'src/app/service/home.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ofertas',
  templateUrl: './ofertas.component.html',
  styleUrls: ['./ofertas.component.css']
})
export class OfertasComponent implements OnInit {

  public arrayDatosOferta = Array<any>();

  constructor(
    private homeService: HomeService,
    private router: Router,
    private gestionOfertasService: GestionOfertasService) { }

  ngOnInit() {
    this.homeService.getOfertas().subscribe(
      response => {
        this.arrayDatosOferta = response;

        console.log(JSON.stringify(response));

      },
      error => {
        console.log('Error ' + JSON.stringify(error));
      }
    )

  }

  public goToViewDetail(id: any): void {
    this.router.navigate(['/oferta', id]);

  }
  public goToViewDetail2(): void {
    this.router.navigate(['/nuevasofertas']);

  }
  public deleteOffer(id: any): void {
    this.gestionOfertasService.deleteOffer(id).subscribe(
      response => {


        console.log(JSON.stringify(response));
        this.ngOnInit();
      },
      error => {
        console.log('Error ' + JSON.stringify(error));
      }
    )

  }

}
