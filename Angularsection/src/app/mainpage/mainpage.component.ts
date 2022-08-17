import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  btnclick()
  {
  
    this.router.navigateByUrl('/manager')
  }

  bttnclick()
  {
  
    this.router.navigateByUrl('/detailedview')
  }
  bottnclick()
  {
  
    this.router.navigateByUrl('/viewusers')
  }
  

  type = 'bar';
  data = {
    labels: ["Num of Users", "Number of tasks", "Approved", "Rejected", "Completed","Processing","In Review"],
    datasets: [
      {     
        label: "Company performance status",
        fill:'true',
        backgroundColor: ["#8a3ab9", "#4c68d7","#cd486b","#fbad50","#bc2a8d","#6495ed","#32cd32"],
        data: [2,5,3,2,2,2,1]
      }
    ]
  };

options = {
  legend: {
    display: true
},
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    xAxes: [
      { display: true,
                gridLines: {
                    display:false
                }
            }],
    yAxes: [
      {
                display: true,
                gridLines: {
                    display:false
                }   
            }]
}
}


}
