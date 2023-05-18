import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
url:string='http://localhost:9090'
  constructor(private httpClient:HttpClient) { }
  doLogin(login:any){
    return this.httpClient.post<any>(this.url+'/admin/login',login.value);
  }
}
