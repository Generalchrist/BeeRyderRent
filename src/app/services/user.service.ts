import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ChangePasswordModel } from '../models/changePasswordModel';
import { listResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/ResponseModel';
import { SingleResponseModel } from '../models/singleResponseModel';
import { TokenModel } from '../models/tokenModel';
import { UserModel } from '../models/userModel';
import { apiUrl } from './service-constants.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private serviceUrl = apiUrl + "users/"

  constructor(private httpClient:HttpClient) { }

  updateUser(user:UserModel):Observable<SingleResponseModel<TokenModel>>{
    return this.httpClient.post<SingleResponseModel<TokenModel>>(this.serviceUrl + "update", user);
  }

  changePassword(changePasswordModel: ChangePasswordModel):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.serviceUrl + "changepassword", changePasswordModel);
  }

  getByMail(email: string):Observable<SingleResponseModel<UserModel>>{
    return this.httpClient.get<SingleResponseModel<UserModel>>(this.serviceUrl + "getbymail?email=" + email);
  }



}
