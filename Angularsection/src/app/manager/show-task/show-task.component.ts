import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
@Component({
  selector: 'app-show-task',
  templateUrl: './show-task.component.html',
  styleUrls: ['./show-task.component.css']
})
export class ShowTaskComponent implements OnInit {
  searchText:any;
  constructor(private sharService:SharedService) { }

  TaskList:any=[]

  ngOnInit(): void {
    this.refreshTaskList();
    
  }

  refreshTaskList(){
    this.sharService.shared_task().subscribe(data=>{
      this.TaskList=data;
    });
  }


}
