import { RequestFilterInterceptorService } from './sp1-common-services/request-filter-interceptor.service';
import { SpCommonModule } from './sp-common/sp-common.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SpCommonModule
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:RequestFilterInterceptorService,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
