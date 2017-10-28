import { NgForm } from '@angular/forms/src/directives';
import { Http } from '@angular/http';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent  {

  student="hira";
   url='';
  constructor(private http:Http) {
  
   }
   public onFormSubmit(f:NgForm)
   {
     console.log(f.value);
     this.http.post('../api/Customers',f.value).subscribe();
   }

   log(x){
    console.log(x);
    
   }

}
