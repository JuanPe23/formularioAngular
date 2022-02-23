import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class HomeService {





  constructor(private http: HttpClient) {

  }

  public getOfertas(): Observable<any> {
    let url = environment.API + '/ofertas';
    return this.http.get(url);

  }

  public getOferta(id: number): Observable<any> {
    let url = environment.API + '/ofertas/' + id;
    return this.http.get(url);

  }

}
