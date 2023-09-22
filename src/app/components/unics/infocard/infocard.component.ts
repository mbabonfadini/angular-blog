import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-infocard',
  templateUrl: './infocard.component.html',
  styleUrls: ['./infocard.component.scss', './infocard.media.component.scss']
})
export class InfocardComponent implements OnInit {
  @Input() title: string =''
  @Input() value: string =''
  constructor() { }

  ngOnInit(): void {
  }

}
