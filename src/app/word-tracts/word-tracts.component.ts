import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-word-tracts',
  templateUrl: './word-tracts.component.html',
  styleUrls: ['./word-tracts.component.scss']
})
export class WordTractsComponent implements OnInit {
  ssWordTract = `We have repair facilities in your area on our Select Service® program. These repairers provide the peace of
  mind of a repair warranty and direct billing to State Farm when repairs are complete. I will provide you
  names of these repair facilities and send an assignment to the one you choose in order to move your claim
  forward. You can then contact them to arrange your vehicle estimate and repairs.`;
  adspWordTract = 'You have the right to select the repair facility of your choice and only you can authorize the repairs to your vehicle.';

  constructor() { }

  ngOnInit(): void {
  }

}
