import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDetail } from '../models/CarDetail';
import { listResponseModel } from '../models/listResponseModel';
import { SingleResponseModel } from '../models/singleResponseModel';


@Injectable({
  providedIn: 'root',
})
export class CarDetailService {
  apiUrl = 'https://localhost:44371/api/cars';

  constructor(private httpclient: HttpClient) {}

  getCarDetails():Observable<listResponseModel<CarDetail>> {
    let newPath = this.apiUrl + "/getcardetaildto";
    return this.httpclient.get<listResponseModel<CarDetail>>(newPath);
  }

  getCarDetailsById(id:number):Observable<SingleResponseModel<CarDetail>>{
    let newPath = this.apiUrl + "/getcardetaildtobyid?id=" + id;
    return this.httpclient.get<SingleResponseModel<CarDetail>>(newPath);
  }



}
