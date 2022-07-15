import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Car } from '../models/Car';
import { listResponseModel } from '../models/listResponseModel';
import { apiUrl } from './service-constants.service';
import { FilterOptions } from '../models/FilterOptions';

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
  getCarsByFilters(filterOptions : FilterOptions): Observable<listResponseModel<Car>> {
    return this.httpclient.post<listResponseModel<Car>>(this.serviceUrl + '/getfilteredcars',filterOptions);
  }






}
