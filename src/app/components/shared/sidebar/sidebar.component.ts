import { Component, OnInit } from '@angular/core';
import { Pages } from 'src/app/script/Pages.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  pages: Pages[] = [
    {
      name: 'Contacts',
      description: 'Button with a schedule',
      img: '/assets/imgs/contacts.svg',
      link: '#',
    },
    {
      name: 'Charts',
      description: 'Button with a chart',
      img: '/assets/imgs/charts.svg',
      link: '#',
    },
    {
      name: 'Calendar',
      description: 'Button with a calendar',
      img: '/assets/imgs/calendar.svg',
      link: '#',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
