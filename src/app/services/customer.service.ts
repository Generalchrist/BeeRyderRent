import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerResponseModule } from '../models/CustomerResponseModule';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  apiUrl = "https://localhost:44371/api/customers/getall"

  constructor(private httpclient:HttpClient) { }

  getColors():Observable<CustomerResponseModule>{
    return this.httpclient.get<CustomerResponseModule>(this.apiUrl);
  }

}
