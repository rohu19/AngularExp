import { ListSpsService } from './list-sps.service';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-list-sps',
  templateUrl: './list-sps.component.html',
  styleUrls: ['./list-sps.component.css']
})
export class ListSpsComponent {

user:any;
status:boolean=false;
message:string="";
swimmingPool:FormGroup;

  constructor(private service:ListSpsService,private formBuilder:FormBuilder){
    this.swimmingPool=formBuilder.group({
      title:new FormControl(),
      streetName:new FormControl(),
      plotNo:new FormControl(),
      areaName:new FormControl(),
      city:new FormControl(),
      state:new FormControl(),
      country:new FormControl(),
      pinCode:new FormControl()
    }
    );
  }

// get title(){
//   return this.swimmingPool.get('title');
// }
// get streetName(){
//   return this.swimmingPool.get('streetName');
// }
// get plotNo(){
//   return this.swimmingPool.get('plotNo');
// }
// get areaName(){
//   return this.swimmingPool.get('areaName');
// }
// get city(){
//   return this.swimmingPool.get('city');
// }

 ngOnInit(){
  var title=sessionStorage.getItem('title')
   this.service.readTitle(title).subscribe(r1=>{
     console.log(r1);
     this.user=r1;


     this.swimmingPool.patchValue(this.user);
     title=r1.title;
     console.log(r1);
    
  });
 }




resetStatus(){
  this.status=false;
  this.message="";
}

}
