import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  title = 'Angular-APP';
  currentVal="";
  curntVal="";
 getVal(val: any)
 {
   console.warn(val);
   this.currentVal=val;
 }
 getVl(val1:any)
{
  console.warn(val1);
  this.curntVal=val1;
}
}
