import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TaskModel } from '../Model/TaskModel.model';
import { firstValueFrom } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private http: HttpClient) { }

  getTaskDetailsPromise(): Promise<TaskModel[]>{
    return firstValueFrom(
      this.http.get<TaskModel[]>("http://localhost:5162/DisplayTasks")
    );
  }
}
