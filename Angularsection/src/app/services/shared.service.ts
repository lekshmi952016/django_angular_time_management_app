import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SharedService {
 
  readonly APIUrl ='http://127.0.0.1:8000';
  private url = 'http://127.0.0.1:8000/tasks/';
  
  constructor(private http: HttpClient) { }
  shared_task(){
    return this.http.get(this.APIUrl+'/tasks/');
    
  }
  shared_user(){
  return this.http.get(this.APIUrl+'/users/');
  }

  addtask(val:any){
    return this.http.post(this.APIUrl + '/tasks/',val);
  }
  public deleteusers(TASK_ID: any) {
    return this.http.delete(this.APIUrl+ '/tasks/' + TASK_ID+'');
   
  }
  public updateusers(TASK_ID: any,item: any) {
    return this.http.put(this.APIUrl+ '/tasks/' + TASK_ID+"/",item );
    }

    getTaskById(pk:number) {
      return this.http.get(this.url + pk)
    }
    updateTaskById(pk:number,data:object) {
      return this.http.put(this.url + pk+"/", data)
    }
}


