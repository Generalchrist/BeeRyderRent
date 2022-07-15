import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { listResponseModel } from '../models/listResponseModel';
import { Rental } from '../models/Rental';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  apiUrl = "https://localhost:44371/api/rentals/getrentaldetaildto"

  constructor(private httpclient:HttpClient) { }

  getRentals():Observable<listResponseModel<Rental>>{
    return this.httpclient.get<listResponseModel<Rental>>(this.apiUrl);
  }

}
