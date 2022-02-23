import { HomeService } from 'src/app/service/home.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { OffersForm } from 'src/app/model/offersForm';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [HomeService]
})
export class OfertaComponent implements OnInit {

  public sub: any;
  id!: any;
  oferta = new OffersForm();

  constructor(
    private homeService: HomeService,
    private router: Router,
    private route: ActivatedRoute
  ) {

  }
  ngOnInit() {



    this.sub = this.route.paramMap.subscribe((parms: ParamMap) => {
      console.log('El id de la oferta es ' + parms.get('id'));
      this.id = parms.get('id');
      this.homeService.getOferta(this.id).subscribe(
        response => {
          this.oferta.titulo = response.titulo;
          this.oferta.descripcion = response.descripcion;
          this.oferta.empresa = response.empresa;
          this.oferta.salario = response.salario;
          this.oferta.ciudad = response.ciudad;
          this.oferta.email = response.email;


          console.log(JSON.stringify(response));

        },
        error => {
          console.log('Error ' + JSON.stringify(error));
        }
      )
    })
  }



}