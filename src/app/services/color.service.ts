import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ColorResponseModule } from '../models/ColorResponseModule';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  apiUrl = "https://localhost:44371/api/colors/getall"

  constructor(private httpclient:HttpClient) { }

  getColors():Observable<ColorResponseModule>{
    return this.httpclient.get<ColorResponseModule>(this.apiUrl);
  }

}
