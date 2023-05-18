import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NsService {

  constructor() { }
  getMsg(){
    return "hey bro let's do it"
  }
}
