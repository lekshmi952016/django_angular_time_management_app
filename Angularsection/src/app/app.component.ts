import { Component, OnInit } from '@angular/core';
import { SharedService } from './services/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Angularsection';
  shares!:any;
  constructor(private sharService:SharedService){}
  ngOnInit(): void {
    this.show_task();
    this.show_user();
  }
  show_task(){
    this.sharService.shared_task().subscribe((shares)=>{
    this.shares=shares
    console.log(this.shares);
    });
  }
  show_user(){
    this.sharService.shared_user().subscribe((shares)=>{
      this.shares=shares
      console.log(this.shares);
    });
  }
  

}
