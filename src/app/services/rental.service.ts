import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RentalResponseModule } from '../models/RentalResponseModule';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  apiUrl = "https://localhost:44371/api/rentals/getall"

  constructor(private httpclient:HttpClient) { }

  getColors():Observable<RentalResponseModule>{
    return this.httpclient.get<RentalResponseModule>(this.apiUrl);
  }

}
