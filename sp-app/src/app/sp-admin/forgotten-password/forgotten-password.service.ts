import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ForgottenPasswordService {



  url='http://localhost:9090'
  constructor(private httpClient:HttpClient) { }


  save(forgottenPassword:any){
    return this.httpClient.post<any>(this.url+"/admin/forgottenPassword",forgottenPassword.value);
  }
}
