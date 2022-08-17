import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { DetailedviewComponent } from './manager/detailedview/detailedview.component';
import { ManagerComponent } from './manager/manager.component';
import { ViewusersComponent } from './manager/viewusers/viewusers.component';
import { RegisterComponent } from './register/register.component';
import { EditTaskComponent } from './user/edit-task/edit-task.component';
import { UserComponent } from './user/user.component'; 
import { ViewtaskslistComponent } from './user/viewtaskslist/viewtaskslist.component';
import { UsertemplateComponent } from './usertemplate/usertemplate.component';
const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'manager',component:ManagerComponent},
  {path:'users',component:UserComponent},
  {path:'mainpage',component:MainpageComponent},
  {path:'register',component:RegisterComponent},
  {path:'viewtask',component:EditTaskComponent},
  {path:'usertemplate',component:UsertemplateComponent},
  {path:'viewusers',component:ViewusersComponent},
  {path:'detailedview',component:DetailedviewComponent},
  {path:'viewtaskslists',component:ViewtaskslistComponent},
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
