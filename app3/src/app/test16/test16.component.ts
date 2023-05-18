import { FormGroup, FormBuilder, FormControl, FormArray } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-test16',
  templateUrl: './test16.component.html',
  styleUrls: ['./test16.component.css']
})
export class Test16Component {
skills:any=[
  {id:1,name:"C"},
  {id:2,name:"C++"},
  {id:3,name:"Java"},
  {id:4,name:"Python"},
];
person:FormGroup;

constructor(private FormBuilder:FormBuilder){
  this.person=FormBuilder.group({
    firstName:new FormControl(),
    lastName:new FormControl(),
    knowSkills:new FormArray([])
  });
  for(var i=0;i<this.skills.length;i++){
    this.knowSkills.push(new FormControl());
  }
}
get knowSkills(){
  return this.person.get('knowSkills') as FormArray;
}


save(){

var selectedSkills=[];  
for(var i=0;i<this.knowSkills.length;i++){

  if(this.knowSkills.controls[i].value){
    selectedSkills.push({"id":this.skills[i].id});


  }
  
}

console.log(selectedSkills);
this.person.value.knowSkills=selectedSkills;
 console.log(this.person.value);
  
}


}
