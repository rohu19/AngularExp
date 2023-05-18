import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule} from'@angular/forms';
import { Test1Component } from './test1/test1.component';
import { Test2Component } from './test2/test2.component';
import { Test3Component } from './test3/test3.component';
import { Test4Component } from './test4/test4.component';
import { Test5Component } from './test5/test5.component';
import { Test6Component } from './test6/test6.component';
import { Test7Component } from './test7/test7.component';
import { Test8Component } from './test8/test8.component';
import { Test9Component } from './test9/test9.component';
import { Test10Component } from './test10/test10.component';
import { Test11Component } from './test11/test11.component';
import { Test12Component } from './test12/test12.component';
import { Test13Component } from './test13/test13.component';
import { Test15Component } from './test15/test15.component';
import { Test14Component } from './test14/test14.component';
import { Test16Component } from './test16/test16.component';
import { Test17Component } from './test17/test17.component';

@NgModule({
  declarations: [
    AppComponent,
    Test1Component,
    Test2Component,
    Test3Component,
    Test4Component,
    Test5Component,
    Test6Component,
    Test7Component,
    Test8Component,
    Test9Component,
    Test10Component,
    Test11Component,
    Test12Component,
    Test13Component,
    Test15Component,
    Test14Component,
    Test16Component,
    Test17Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
