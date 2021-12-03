import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Car } from '../models/Car';
import { listResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  apiUrl = 'https://localhost:44371/api/cars';

  constructor(private httpclient: HttpClient) {}

  getCars(): Observable<listResponseModel<Car>> {
    let newPath = this.apiUrl + '/getall';
    return this.httpclient.get<listResponseModel<Car>>(newPath);
  }
  getCarsByBrand(id: number): Observable<listResponseModel<Car>> {
    let newPath = this.apiUrl + '/getcarsbybrandid?brandid=' + id;
    return this.httpclient.get<listResponseModel<Car>>(newPath);
  }
  getCarsByColor(id: number): Observable<listResponseModel<Car>> {
    let newPath = this.apiUrl + '/getcarsbycolorid?colorid=' + id;
    return this.httpclient.get<listResponseModel<Car>>(newPath);
  }
}
