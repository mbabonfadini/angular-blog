import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss'],
})
export class IconsComponent implements OnInit {
  @Input() imagem: string = '';
  @Input() descricao: string = '';
  @Input() link: string = '';

  constructor() {}

  ngOnInit(): void {}
}
