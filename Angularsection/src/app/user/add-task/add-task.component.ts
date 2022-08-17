import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup} from '@angular/forms';
import { SharedService } from 'src/app/services/shared.service';
import {​​​​​​addModel}​​​​​​ from './add-task.model';


@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  formValue ! : FormGroup <any>
  addObj:addModel= new addModel;
  constructor(private sharservice:SharedService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      TASK_NAME :[''],
      TASK_ID :[''],
      TASK_STATUS :[''],
      START_TIME :[''],
      END_TIME:[''],
      CREATED_DATE:[''],
      APPROVAL_STATUS :[''],
      ASSIGNED_MANAGER:[''],
      TASK_DESCRIPTION :[''],
    })
  }
  add(){
    this.addObj.TASK_NAME = this.formValue.value.TASK_NAME;
    this.addObj.TASK_ID = this.formValue.value.TASK_ID;
    this.addObj.TASK_STATUS = this.formValue.value.TASK_STATUS;
    this.addObj.START_TIME = this.formValue.value.START_TIME;
    this.addObj.END_TIME  = this.formValue.value.END_TIME ;
    this.addObj. CREATED_DATE = this.formValue.value. CREATED_DATE ;
    this.addObj.APPROVAL_STATUS = this.formValue.value.APPROVAL_STATUS ;
    this.addObj.ASSIGNED_MANAGER  = this.formValue.value.ASSIGNED_MANAGER;
    this.addObj.TASK_DESCRIPTION  = this.formValue.value.TASK_DESCRIPTION;
    this.sharservice.addtask(this.addObj).subscribe({next: (p) => {
      console.log(p)
    },
    error: (e) => {
      console.log(e)
      alert("error")
    },
    complete: () => {
      console.log("record added")
      alert("record added")    
    }
  })
  }
}
