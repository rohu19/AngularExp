import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app3';
  country="India";
  age=22;
  weigth=55.3;
  heigth=9.3;
  var1: number=100;
  var2: string='abc';
  var3: boolean=false;
  var31:any=100;
  var32:any='abc';
  var33:any=false;

  var4=[10,45,true,'abc',8];
  var5: number[] =[10.200,4.5,78,98,10,5];
  var6:string[]=["abc","hello",'test','r'];
 var61 : any[]=[10,2,true,'abc','t'];


  test1(){
    console.log('from test1');

  }

  test2(){
    console.log('from test2');
    return 1000;
  }
  test3(){
    console.log('from test3');
    return 'abc';
  }
  test4():number;
  test4(){
    console.log('from test4');
    return 12000;
  }
  test5():boolean;
  test5(){
    console.log('from test5');
    return true;
  }
  test6():any{
    console.log('from test6');
    return true;
  }
  test7():any{
    console.log('from test7');
    return 'Rohan';
  }
}
