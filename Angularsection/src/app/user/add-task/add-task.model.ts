import { Time } from "@angular/common";
export class addModel{
    TASK_NAME?:string;
    TASK_ID:number=0;
    TASK_STATUS?:string;
    START_TIME?:Time;
    END_TIME?:Time;
    CREATED_DATE?:Date
    APPROVAL_STATUS?:string;
    ASSIGNED_MANAGER?:string;
    TASK_DESCRIPTION?:string;
}