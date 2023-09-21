import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() link: string = '';
  @Input() src: string = '';
  @Input() description: string = '';
  @Input() type: string = '';
  @Input() title: string = '';
  @Input() text: string = '';
  constructor() {}

  ngOnInit(): void {}
}
