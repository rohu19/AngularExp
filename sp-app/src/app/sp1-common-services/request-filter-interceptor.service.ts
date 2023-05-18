import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RequestFilterInterceptorService  implements HttpInterceptor{

  constructor() { }



  intercept(req:HttpRequest<any>,next:HttpHandler){


    //implemet the Code wich is required to every request

   // console.log('I am in the intercept method'+req.url);
        
    
   // const duplicateReq=req.clone({url:'login',method:'get'});


    return next.handle(req);
  }
}
