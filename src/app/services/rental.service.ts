import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreditCard } from '../models/CreditCard';
import { listResponseModel } from '../models/listResponseModel';
import { Rental } from '../models/Rental';
import { RentalDetail } from '../models/RentalDetail';
import { ResponseModel } from '../models/ResponseModel';
import { apiUrl } from './service-constants.service';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  private serviceUrl = apiUrl + "rentals/"

  constructor(private httpClient: HttpClient) { }

  getRentalDetails(): Observable<listResponseModel<RentalDetail>>{
    return this.httpClient.get<listResponseModel<RentalDetail>>(this.serviceUrl + "getrentaldetaildto")
  }
  getOccupiedDates(carId:number): Observable<listResponseModel<Date>>{
    return this.httpClient.get<listResponseModel<Date>>(this.serviceUrl + "getoccupieddates?carId=" + carId )
  }

  rent(rental:Rental, creditCard:CreditCard): Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.serviceUrl + "add", {rental, creditCard})

  }
  GetRentalDetailDtoByUserId(userId:number): Observable<listResponseModel<RentalDetail>>{
    return this.httpClient.get<listResponseModel<RentalDetail>>(this.serviceUrl + "getrentaldetaildtobyuserid?userId=" + userId)
  }

}
