import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarImage } from '../models/CarImage';
import { listResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarimageService {

  constructor(private httpClient:HttpClient) { }

  apiUrl ="https://localhost:44371/api/carimages"

  getCarImagesByCarId(carId:number):Observable<listResponseModel<CarImage>>{
    let newPath= this.apiUrl + "/getcarimagesbycarid?carid=" + carId;
    return this.httpClient.get<listResponseModel<CarImage>>(newPath);
  }

}
