import { Component, OnInit } from '@angular/core';
import { TaskModel } from '../Model/TaskModel.model';
import { ApiserviceService } from '../Services/apiservice.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-dashboard',
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {

  TaskData: TaskModel[] = [];
  
  constructor(private apiservice : ApiserviceService){}

  ngOnInit(): void {
      this.fetchTaskDetailsPromise();
  }

  async fetchTaskDetailsPromise(): Promise<void> {
    try{
      this.TaskData = await this.apiservice.getTaskDetailsPromise();
      console.log(this.TaskData);
    }
    catch(error){
      console.log("Error in fetching the Task Details.", error);
    }
    finally{
      console.log("Request Complete.");
    }
  }

}
