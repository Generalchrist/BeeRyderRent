import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Brand } from '../models/Brand';
import { listResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class BrandService {
  apiUrl = "https://localhost:44371/api/brands/getall"

  constructor(private httpclient:HttpClient) { }

  getBrands():Observable<listResponseModel<Brand>>{
    return this.httpclient.get<listResponseModel<Brand>>(this.apiUrl);
  }


}
