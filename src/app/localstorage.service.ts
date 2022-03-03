import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Setting } from './control/control.service';

@Injectable({
  providedIn: 'root',
})
export class LocalstorageService {
  taskTotal$ = new BehaviorSubject<number>(this.getTaskTotal());

  constructor() {}

  saveTaskTotal(total: number) {
    localStorage.setItem(TOTAL_TASKS, total.toLocaleString());
    this.taskTotal$.next(total);
  }

  getTaskTotal(): number {
    return localStorage.getItem(TOTAL_TASKS) as unknown as number;
  }

  incrementTaskCount() {
    let count = this.getTaskTotal();
    count++;
    this.taskTotal$.next(count);
    this.saveTaskTotal(count);
  }
  decrementTaskCount() {
    let count = this.getTaskTotal();
    if (count <= 0) {
      count = 0;
      this.saveTaskTotal(count);
      return;
    }
    count--;
    this.saveTaskTotal(count);
  }

  savePersonalExtension(ext: string) {
    localStorage.setItem(PERSONAL_EXTENSION, ext);
  }

  getPersonalExtension():string {
    return localStorage.getItem(PERSONAL_EXTENSION) as string;
  }

  saveSettings(settings: Setting[]):void {
    const value = JSON.stringify(settings);
    localStorage.setItem('settings', value);
  }
  getSettings(): Setting[]{
    return JSON.parse(localStorage.getItem('settings')as string) as Setting[];
  }
}

const TOTAL_TASKS = 'totalTasks';
const PERSONAL_EXTENSION = 'personalExtension';
