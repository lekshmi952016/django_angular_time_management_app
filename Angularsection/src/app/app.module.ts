import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ManagerComponent } from './manager/manager.component';
import { ShowTaskComponent } from './manager/show-task/show-task.component';
import { UserComponent } from './user/user.component';
import { AddTaskComponent } from './user/add-task/add-task.component';
import { SharedService } from './services/shared.service';
import { MainpageComponent } from './mainpage/mainpage.component';
import { RegisterComponent } from './register/register.component';
import { UsertemplateComponent } from './usertemplate/usertemplate.component';
import { PipePipe } from './pipe.pipe';
import { EditTaskComponent } from './user/edit-task/edit-task.component';
import { ViewusersComponent } from './manager/viewusers/viewusers.component';
import { DetailedviewComponent } from './manager/detailedview/detailedview.component';
import { ViewtaskslistComponent } from './user/viewtaskslist/viewtaskslist.component';
import { ChartModule } from 'angular2-chartjs';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ManagerComponent,
    ShowTaskComponent,
    UserComponent,
    AddTaskComponent,
    MainpageComponent,
    RegisterComponent,
    UsertemplateComponent,
    PipePipe,
    EditTaskComponent,
    ViewusersComponent,
    DetailedviewComponent,
    ViewtaskslistComponent
    
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ChartModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
