import { AccordMenuService } from '../shared/accord-menu/accord-menu.service';
import { ActivatedRoute, RouterLinkActive } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { AccordMenu } from './../shared/accord-menu/accord-menu.model';
import { Component, OnInit } from '@angular/core';
import {take} from 'rxjs/operators'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  activatedRoute!:string;

  accordItems!: AccordMenu[];

  constructor(
    private accordServ: AccordMenuService,
    private activeRoute: ActivatedRoute,
    ) {}

  ngOnInit(): void {
    this._initHome();
  }

  private _initHome(){
    this.accordItems = this.accordServ.getAccordItems();
    this.activeRoute.url
    .pipe(take(1))
    .subscribe(segment=>{
      const route = segment[0].path
     this.activatedRoute = route.charAt(0).toLocaleUpperCase() + route.slice(1)}
     );
  }
}
