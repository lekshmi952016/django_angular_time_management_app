import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-usertemplate',
  templateUrl: './usertemplate.component.html',
  styleUrls: ['./usertemplate.component.css']
})
export class UsertemplateComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  bttnclick()
  {

    this.router.navigateByUrl('/users')
  }

  buttonclick()
  {

    this.router.navigateByUrl('/viewtask')
  }
  buttonsclick()
  {

    this.router.navigateByUrl('/user-update/delete')
  }
  btclick()
  {
  
    this.router.navigateByUrl('/viewtaskslists')
  }
}
