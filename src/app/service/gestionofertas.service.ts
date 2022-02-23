import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';
import { OffersForm } from 'src/app/model/offersForm';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
const LOGIN_KEY = 'login';
@Injectable({
    providedIn: 'root'
})
export class GestionOfertasService {

    token!: string;
    headers! :  HttpHeaders;
    constructor(private http: HttpClient) {

    }

    validateToken(): void {
        this.token = JSON.parse(<string>localStorage?.getItem(LOGIN_KEY))['id_token'];
        console.log(this.token);
        this.headers = new HttpHeaders({'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.token});

    }
    createOffer(oferta: OffersForm): Observable<OffersForm> {
        console.log('createOffer(' + JSON.stringify(oferta) + ')'); // TOOD NEW
        this.validateToken();
        return this
            .http
            .post<OffersForm>(environment.API + '/ofertas', oferta,{headers: this.headers})
        

    }
    deleteOffer(id: number): Observable<any> {
        
        this.validateToken();
        return this
            .http
            .delete(environment.API + '/ofertas/'+id,{headers: this.headers})
    }

}