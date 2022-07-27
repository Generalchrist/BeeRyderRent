import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarImage } from '../models/CarImage';
import { listResponseModel } from '../models/listResponseModel';
import { apiUrl } from './service-constants.service';

@Injectable({
  providedIn: 'root'
})
export class CarimageService {

  constructor(private httpClient:HttpClient) { }

  private serviceUrl = apiUrl + "carimages";

  getCarImagesByCarId(carId:number):Observable<listResponseModel<CarImage>>{
    let newPath= this.serviceUrl + "/getcarimagesbycarid?carid=" + carId;
    return this.httpClient.get<listResponseModel<CarImage>>(newPath);
  }

}
