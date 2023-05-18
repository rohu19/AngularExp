import { AddSpService } from './add-sp.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-add-sp',
  templateUrl: './add-sp.component.html',
  styleUrls: ['./add-sp.component.css']
})
export class AddSpComponent {
user:any;
message:string="";
status:boolean=false;
swimmingPool:FormGroup;

constructor(private service:AddSpService,private formBuilder:FormBuilder){

this.swimmingPool=formBuilder.group({
  title:new FormControl('',Validators.required),
  streetName:new FormControl('',Validators.required),
  plotNo:new FormControl('',Validators.required),
  areaName:new FormControl('',Validators.required),
  city:new FormControl('',Validators.required),
  state:new FormControl('',Validators.required),
  country:new FormControl('',Validators.required),
  pinCode:new FormControl('',Validators.required)
});
}





get title(){
  return this.swimmingPool.get('title');
}
get streetName(){
  return this.swimmingPool.get('streetName');
}
get plotNo(){
  return this.swimmingPool.get('plotNo');
}
get areaName(){
  return this.swimmingPool.get('areaName');
}
get city(){
  return this.swimmingPool.get('city');
}
get state(){
  return this.swimmingPool.get('state');
}
get country(){
  return this.swimmingPool.get('country');
}
get pinCode(){
  return this.swimmingPool.get('pinCode');
}

save(){
  this.service.save(this.swimmingPool).subscribe(r1=>{
    this.status=true;
    this.message=" swimmingPool data is saved successfully"
  this.user=r1;
  })
}



}
