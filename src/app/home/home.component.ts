import { LocalstorageService } from '../localstorage.service';
import { AccordMenuService } from '../shared/accord-menu/accord-menu.service';
import { ActivatedRoute, RouterLinkActive } from '@angular/router';
import { AccordMenu } from './../shared/accord-menu/accord-menu.model';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  title = 'Home';
  activatedRoute = 'Home';
  whatsNew!:string;

  accordItems!: AccordMenu[];

  extension:string = ''

  constructor(
    private accordServ: AccordMenuService,
    private activeRoute: ActivatedRoute,
    private ls: LocalstorageService,
    private ts: Title,
    ) {}

  ngOnInit(): void {
    this._initHome();
    this.ts.setTitle(this.title)
  }

  onExtensionChanges(extension:string){
    this.ls.savePersonalExtension(extension);
  }

  getExtension(){
    const ext = this.ls.getPersonalExtension();
    if(!ext)return;
    this.extension = ext;
  }

  onHideNew(){
    this.ls.saveNewCard('hide');
    this.whatsNew = this.ls.getNewCard();
  }



  private _initHome(){
    this.whatsNew = this.ls.initNewCard();
    this.accordItems = this.accordServ.getAccordItems();
    // this.activeRoute.url
    // .pipe(take(1))
    // .subscribe(segment=>{
    //   const route = segment[0].path;
    //   this.getExtension();
    //  this.activatedRoute = route.charAt(0).toLocaleUpperCase() + route.slice(1)}

    //  );
  }
}
