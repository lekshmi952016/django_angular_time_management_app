import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-viewtaskslist',
  templateUrl: './viewtaskslist.component.html',
  styleUrls: ['./viewtaskslist.component.css']
})
export class ViewtaskslistComponent implements OnInit {
  searchText:any;
  constructor(private router: Router,private sharService:SharedService) { }
  TaskList:any=[]
  ngOnInit(): void {
    this.refreshTaskList();
 
  }
  refreshTaskList(){
    this.sharService.shared_task().subscribe(data=>{
      this.TaskList=data;
    });
  }
 btclick()
  {
  
    this.router.navigateByUrl('/viewtaskslists')
  }
}
