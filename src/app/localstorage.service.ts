import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {
  taskTotal$ = new BehaviorSubject<number>(this.getTaskTotal());

  constructor() { }

  saveTaskTotal(total:number){
    localStorage.setItem(TOTAL_TASKS, total.toLocaleString());
    this.taskTotal$.next(total);
  }

  getTaskTotal():number{
    return localStorage.getItem(TOTAL_TASKS) as unknown as number;
  }

  incrementTaskCount(){
    let count = this.getTaskTotal();
    count++;
    this.taskTotal$.next(count);
    this.saveTaskTotal(count);
  }
  decrementTaskCount(){
    let count = this.getTaskTotal();
    if (count <= 0){
      count = 0;
      this.saveTaskTotal(count);
      return
    }
    count--;
    this.saveTaskTotal(count);
  }


  savePersonalExtension(ext:string){
    localStorage.setItem(PERSONAL_EXTENSION, ext);
  }

  getPersonalExtension(){
    return localStorage.getItem(PERSONAL_EXTENSION);
  }

}

const TOTAL_TASKS = 'totalTasks';
const PERSONAL_EXTENSION = 'personalExtension';
