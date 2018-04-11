import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cup',
  templateUrl: './cup.component.html',
  styleUrls: ['./cup.component.css']
})
export class CupComponent implements OnInit {
  @Input('nb') nb: number;
  markup: string = '';

  constructor() { }

  ngOnInit() {
    let img_markup = '<img class="cup_small" src="/assets/img/logos/champions-cup.jpg" alt="cup">';
    for (let i = 0; i < this.nb; i++) {
      this.markup += img_markup;
    }

  }

}
