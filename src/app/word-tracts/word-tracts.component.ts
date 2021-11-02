import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-word-tracts',
  templateUrl: './word-tracts.component.html',
  styleUrls: ['./word-tracts.component.scss']
})
export class WordTractsComponent implements OnInit {
  ssWordTract = 'SS';
  adspWordTract = 'You have the right to select the repair facility of your choice and only you can authorize the repairs to your vehicle.';

  constructor() { }

  ngOnInit(): void {
  }

}
