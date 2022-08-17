import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
@Component({
  selector: 'app-viewusers',
  templateUrl: './viewusers.component.html',
  styleUrls: ['./viewusers.component.css']
})
export class ViewusersComponent implements OnInit {

  constructor(private sharService:SharedService) { }

  TaskList:any=[]
  ngOnInit(): void {
    this.refreshTaskList();
  }
  refreshTaskList(){
    this.sharService.shared_user().subscribe(data=>{
      this.TaskList=data;
    });
  }
}
