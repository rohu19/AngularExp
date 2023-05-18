import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyprofileService {
url:string='http://localhost:9090'
  constructor(private httpClient:HttpClient) { }

  readUser(email:any){
    return this.httpClient.get<any>(this.url+"/admin/myprofile/"+email);
  }
  save(user:any){
    return this.httpClient.post<any>(this.url+"/admin/myprofile/save",user.value);
  }
}
