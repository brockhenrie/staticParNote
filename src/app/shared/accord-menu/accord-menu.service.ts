import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AccordMenu } from './accord-menu.model';

@Injectable({
  providedIn: 'root'
})
export class AccordMenuService {
  private contactInfo: AccordMenu = {
    header: {
      title: 'Language Line Solutions',
      desc: 'Call Info',
      icon: 'account_circle',
    },

    content: {
      type: 'form',
      form: this.fb.group({
        clientId: ['799841'],
        departCode: ['124753'],
        personalExtension: [''],
      }),
      formConfig: [
        {
          name: 'clientId',
          qType: 'text',
          placeholder: 'Client Id',

        },
        {
          name: 'departCode',
          qType: 'text',
          placeholder: 'Department Code',

        },
        {
          name: 'personalExtension',
          qType: 'text',
          placeholder: 'Personal Extension',

        },
      ],
    },
  };
 private restorationInfo: AccordMenu = {
    header: {
      title: 'Restoration Numbers',
      desc: 'Phone Numbers',
      icon: 'phone',
    },

    content: {
      type: 'form',
      form: this.fb.group({
        servPro: ['1-800-737-8776'],
        servMast: ['1-800-737-7663'],
        alac: ['1-877-828-3276'],
      }),
      formConfig: [
        {
          name: 'servPro',
          qType: 'text',
          placeholder: 'ServPro',

        },
        {
          name: 'servMast',
          qType: 'text',
          placeholder: 'Service Master',

        },
        {
          name: 'alac',
          qType: 'text',
          placeholder: 'Alacrity',

        },
      ],
    },
  };
  private acronyms: AccordMenu = {
    header: {
      title: 'Acronyms',
      desc: 'Common Acronyms',
      icon: 'description',
    },

    content: {
      type: 'display',
      formConfig: [
        {
          name: 'FTMCOV',
          qType: 'text',
          placeholder: 'Failure to Maintain Control of Vehicle',

        },
        {
          name: 'FTYROW',
          qType: 'text',
          placeholder: 'Failure to yield right of way',

        },
        {
          name: 'ILOWB',
          qType: 'text',
          placeholder: 'Improper look out while backing',

        },
        {
          name: 'ILO',
          qType: 'text',
          placeholder: ' Improper look out',

        },
        {
          name: 'ILU',
          qType: 'text',
          placeholder: ' Improper Lane Usage',

        },
        {
          name: 'HWP',
          qType: 'text',
          placeholder: 'Hit while parked',

        },
        {
          name: 'H&R',
          qType: 'text',
          placeholder: 'Hit and Run',

        },
        {
          name: 'FTC',
          qType: 'text',
          placeholder: 'Following Too Close',

        },
        {
          name: 'FTOTCD',
          qType: 'text',
          placeholder: ' Failure to Obey Traffic Control Device',

        },
        {
          name: 'LM',
          qType: 'text',
          placeholder: 'Left Message',

        },
        {
          name: 'LMOM',
          qType: 'text',
          placeholder: ' Left Message on Machine',

        },
        {
          name: 'LMOVM',
          qType: 'text',
          placeholder: 'Left Message on Voicemail',

        },
      ],
    },
  };
  private accordItems: AccordMenu[] = [
    this.contactInfo,
    this.restorationInfo,
    this.acronyms,
  ];
  constructor(
    private fb:FormBuilder,
  ) { }

  getAccordItems(): AccordMenu[]{
    return [...this.accordItems]
  }
}
