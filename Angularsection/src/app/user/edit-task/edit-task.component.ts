import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {
 

  UserValue = {
    'TASK_ID':"",
    'TASK_NAME':"",
    'TASK_STATUS' :"",
    'START_TIME' :"",
    'END_TIME' :"",
    'CREATED_DATE' :"",
    'APPROVAL_STATUS' :"",
    'ASSIGNED_MANAGER' :"",
    'TASK_DESCRIPTION' :""
  }

  TaskList:any=[];
  searchText:any;
  constructor(private sharservice:SharedService) { }

  ngOnInit(): void {
    this.refreshTaskList();
  }
  refreshTaskList(){
    this.sharservice.shared_task().subscribe(data=>{
      this.TaskList=data;
    });
  }
  deleteuser(item: any) {
    this.sharservice.deleteusers(item.TASK_ID).subscribe(
      (resp) => {
        console.log(resp);
        this.refreshTaskList();
      },
      (err) => {
        console.log(err);
      }
    );
  }
  edit(item: any){
    this.UserValue = item;
  }
  updateuser(){
    this.sharservice.updateusers(this.UserValue.TASK_ID,this.UserValue).subscribe(
      (resp) => {
        console.log(resp);
        this.refreshTaskList();
      },
      (err) => {
        console.log(err);
      }
      
    );
  }
}
