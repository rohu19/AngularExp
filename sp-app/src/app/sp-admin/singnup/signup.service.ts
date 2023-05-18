import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

url:string='http://localhost:9090';

  constructor(private httpClient:HttpClient ) {
  }
  doSignup(owner:any){

                    return this.httpClient.post<any>(this.url+'/appUser',owner.value);

  }
}
