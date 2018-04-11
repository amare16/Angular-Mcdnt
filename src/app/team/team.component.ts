import { Component, OnInit, Input } from '@angular/core';
import { Team } from '../../model/Team';
//import {Input} from "@angular/compiler/src/core";

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
 // team: Team = new Team('Juventus', 'juve-logo.png', 'Allegri', 1897);

  // data is a property ... you have put also in teams.component.ts file in app-team tag
  @Input('team') team: Team;



  constructor() { }

  ngOnInit() {

  }

}
