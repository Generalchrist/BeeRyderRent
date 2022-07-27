import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Car } from '../models/Car';
import { listResponseModel } from '../models/listResponseModel';
import { apiUrl } from './service-constants.service';
import { FilterOptions } from '../models/FilterOptions';
import { CarDetail } from '../models/CarDetail';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root',
})

export class CarService {
  private serviceUrl = apiUrl + "cars";

  constructor(private httpclient: HttpClient) {}

  getCars(): Observable<listResponseModel<Car>> {
    let newPath = this.serviceUrl + '/getall';
    return this.httpclient.get<listResponseModel<Car>>(newPath);
  }
  getCarsByBrand(id: number): Observable<listResponseModel<Car>> {
    let newPath = this.serviceUrl + '/getcarsbybrandid?brandid=' + id;
    return this.httpclient.get<listResponseModel<Car>>(newPath);
  }
  getCarsByColor(id: number): Observable<listResponseModel<Car>> {
    let newPath = this.serviceUrl + '/getcarsbycolorid?colorid=' + id;
    return this.httpclient.get<listResponseModel<Car>>(newPath);
  }
  getCarsByFilters(filterOptions : FilterOptions): Observable<listResponseModel<CarDetail>> {
    return this.httpclient.post<listResponseModel<CarDetail>>(this.serviceUrl + '/getfilteredcars',filterOptions);
  }
  getCarsModelYears(): Observable<listResponseModel<number>> {
    let newPath = this.serviceUrl + '/getcarsmodelyears';
    return this.httpclient.get<listResponseModel<number>>(newPath);
  }
  getCarDetail(carId:number):Observable<SingleResponseModel<CarDetail>>{
    return this.httpclient.get<SingleResponseModel<CarDetail>>(this.serviceUrl + "/getcardetaildto?id=" + carId)
  }
  getCarDetails():Observable<listResponseModel<CarDetail>>{
    return this.httpclient.get<listResponseModel<CarDetail>>(this.serviceUrl + "/getcardetailsdto")
  }
}
