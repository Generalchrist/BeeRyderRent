import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarResponseModule } from '../models/CarResponseModule';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  apiUrl = "https://localhost:44371/api/cars/getcardetaildto";

  constructor(private httpclient:HttpClient) { }

  getCars():Observable<CarResponseModule>{
    return this.httpclient.get<CarResponseModule>(this.apiUrl);
  }
  
}
