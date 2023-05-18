import { NsService } from './ns.service';
import { isNgTemplate } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app5';
//   course='Angular';
//   image='aaaaaaaaaaaaaaaaaaaaaaaa'
// fruit: any;

// goBack(): void{}
message:string="";

 constructor(private nsService:NsService){
  // setTimeout(() => {
  //   this.title="change title";
  // }, 3000);
 }

ngOnInit(): void{
  this.message=this.nsService.getMsg();
}

  
 }


