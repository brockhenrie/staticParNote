import { LocalstorageService } from './../localstorage.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ControlService {
  settings:Setting[]=[
    {IO:{
      label: "Dark Theme", currentValue:false
    }
  }
  ]
  constructor(private ls:LocalstorageService) { }

  saveSettings(settings:Setting[]){
    this.ls.saveSettings(settings);
    this.ls.saveSettings(this.settings);
  }
  getSettings():Setting[]{
    return this.ls.getSettings();
  }
}

export interface Setting{
  IO: {
    label:string,
    currentValue:boolean
  }

}
