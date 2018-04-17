import { Component, OnInit, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-cup',
  templateUrl: './cup.component.html',
  styleUrls: ['./cup.component.css']
})
export class CupComponent implements OnInit {
    @Input('nb') nb: number;
    markup: string = '';

    constructor() { }

    ngOnChanges() {
    this.markup = '';
    let img_markup = '<img class="cup_small" src="/assets/img/logos/champions-cup.jpg" alt="">';
    for(let i=0; i<this.nb; i++) {
      this.markup += img_markup;
    }
  }

  ngOnInit() {}

}
