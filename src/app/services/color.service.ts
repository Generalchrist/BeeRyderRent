import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Color } from '../models/Color';
import { listResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  apiUrl = "https://localhost:44371/api/colors/getall"

  constructor(private httpclient:HttpClient) { }

  getColors():Observable<listResponseModel<Color>>{
    return this.httpclient.get<listResponseModel<Color>>(this.apiUrl);
  }

}
