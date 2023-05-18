import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChangePasswordService {
url:string='http://localhost:9090';
  constructor(private httpClient:HttpClient) { }


  doChangePassword(changePassword:any){
    return this.httpClient.post<any>(this.url+'/admin/changepassword',changePassword.value);
  }
}
