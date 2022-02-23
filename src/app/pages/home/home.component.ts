import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from 'src/app/service/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [HomeService]
})
export class HomeComponent implements OnInit {

  public arrayDatosOferta = Array<any>();

  constructor(
    private homeService: HomeService,
    private router: Router) { }

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

}