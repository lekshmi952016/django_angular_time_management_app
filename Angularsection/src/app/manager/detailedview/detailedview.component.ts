import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component'; 
import { HttpClient } from '@angular/common/http';
@Component({
  providers:[AppComponent],
  selector: 'app-detailedview',
  templateUrl: './detailedview.component.html',
  styleUrls: ['./detailedview.component.css']
})
export class DetailedviewComponent implements OnInit {
  
  public searchTerm = '';
  public taskById:any;
  public taskByIdCopy:any;
  public updatedTask:any;
  public task:any;
  constructor(public comp:AppComponent,
    private sharservice:SharedService) { }
  TaskList:any=[]
  ngOnInit(): void {
    this.comp.show_task();
    this.refreshTaskList();
  }
  refreshTaskList(){
    this.sharservice.shared_task().subscribe(data=>{
      this.TaskList=data;
    });
  }
  
  action(pk:number) {
    console.log(pk)
    this.sharservice.getTaskById(pk).subscribe((response)=>{
      this.taskById = response;
      console.log(this.taskById)
      this.taskByIdCopy = {...response};
    })
  }
  
  onSubmit() {

    this.sharservice.updateTaskById(this.taskById.TASK_ID, this.taskById).subscribe((response)=>{
      this.updatedTask = response;
      console.log(this.updatedTask)
      window.alert("Task action taken successfully")
   })
    
  }
}
