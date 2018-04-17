import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, Params} from "@angular/router";
import { Team } from '../../model/Team';
import { TeamService } from '../team.service';
import 'rxjs/add/operator/map';
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



  constructor(
      private teamService: TeamService,
      private router: Router,
      private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    console.log(this.team);

    if (!this.team) {
      // team n'est pas defini, on demande au service de nous donner l'info
        // manquante liee au parametre url (nom de l'equipe)

        // recuperation du parametre url
        // this.activatedRoute.params
        //     // .map(item.name => item.name.toUpperCase())
        //     // .map(item => 'FORZA ' + item + '!')
        //     // .subscribe(item => console.log(item)); or we can use like below
        //     .map(item => {
        //       return 'FORZA ' + item.name.toUpperCase() + '!';
        //     })
        //     .subscribe(item => console.log(item));
        this.activatedRoute.params
            .subscribe(item => {
                this.team = this.teamService.getTeamByName(item.name);
            });

    }

    //console.log(this.activatedRoute.params);
  }

}
