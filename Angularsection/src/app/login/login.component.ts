import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

onsubmit(item:any){

  console.log(item)

  if(item.name=="admin" && item.password=='admin'){

    console.log(this.router);

    this.router.navigate(['mainpage']);

  }

  else if(item.name=="user" && item.password=='user'){

      console.log(this.router);

      this.router.navigate(['usertemplate']);

    }
  
    
  else{

    window.alert("USERNAME AND PASSWORD DOESNOT MATCH!!!")

  }

}
}





