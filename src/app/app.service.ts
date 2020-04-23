import { HttpClient, HttpHeaders, HttpResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AppService {
    constructor(protected http: HttpClient) { }
    getDeliveryStatus() {
         return this.http.get('http://localhost:8080/delivery/status', { observe: 'response' });
      }

}