import { Injectable } from '@angular/core';
import {HttpClient,HttpHandler} from '@angular/common/http';
import { Observable,of } from 'rxjs';
import { TASKS } from 'src/app/mock-task';
import { Task } from 'src/app/task';


@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:5000/tasks'

  constructor(private http:HttpClient) { }

  getTask():Observable<Task[]>{
    return this.http.get<Task[]>(this.apiUrl)
  }
}
