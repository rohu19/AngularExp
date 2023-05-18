import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListSpsService {
  url:string='http://localhost:9090'
  constructor(private httpClient:HttpClient) { }

  readTitle(title:any){
    return this.httpClient.get<any>(this.url+"/swimmingPool/SwimmingPool"+title);
  }
}
