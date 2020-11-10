import { Component, Input, OnInit } from '@angular/core';
import { Poruka } from '../types'

@Component({
  selector: 'app-poruka',
  templateUrl: './poruka.component.html',
  styleUrls: ['./poruka.component.scss']
})
export class PorukaComponent implements OnInit {
  @Input() por:Poruka;
  constructor() { }

  ngOnInit(): void {
  }

}
