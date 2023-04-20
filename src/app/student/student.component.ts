import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { studentdata } from './student_model';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  showadd!:boolean;
  showupdate!:boolean;
  formValue!:FormGroup;
  studentmodelobj:studentdata=new studentdata()

  constructor(private formBuilder:FormBuilder,private api:ApiService) { }

  ngOnInit(): void {
    this.formValue=this.formBuilder.group({
      name:['',Validators.required],
      email:['',Validators.required],
      city:['',Validators.required],
      mobile:['',Validators.required]
    })
  }
  add(){
    this.showadd=true;
    this.showupdate=false;
  }
  update(){
    this.showadd=false;
    this.showupdate=true;
  }
  addstudent(){
    this.studentmodelobj.name=this.formValue.value.name;
    this.studentmodelobj.email=this.formValue.value.email;
    this.studentmodelobj.mobile=this.formValue.value.mobile;
    this.studentmodelobj.city=this.formValue.value.city;

     this.api.poststudent(this.studentmodelobj.id).subscribe(res=>{
      console.log(res);
      this.formValue.reset();
      alert("record added successfully");
     },
     err=>{
      alert("something went wrong");
     });
  }

}
