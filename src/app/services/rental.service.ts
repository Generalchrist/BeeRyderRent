import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreditCard } from '../models/CreditCard';
import { listResponseModel } from '../models/listResponseModel';
import { Rental } from '../models/Rental';
import { ResponseModel } from '../models/ResponseModel';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  apiUrl = "https://localhost:44371/api/rentals/getrentaldetaildto"
  serviceUrl: string;

  constructor(private httpclient:HttpClient) { }


  getRentalDetails(): Observable<listResponseModel<RentalDetail>>{
    return this.httpclient.get<listResponseModel<RentalDetail>>(this.serviceUrl + "getdetails")
  }
  getOccupiedDates(carId:number): Observable<listResponseModel<Date>>{
    return this.httpclient.get<listResponseModel<Date>>(this.serviceUrl + "getoccupieddates?carId=" + carId )
  }

  rent(rental:Rental, creditCard:CreditCard): Observable<ResponseModel>{
    return this.httpclient.post<ResponseModel>(this.serviceUrl + "add", {rental, creditCard})

  }


}
