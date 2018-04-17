import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { countries } from "../datasources";
import { Team } from '../../model/Team';
import { TeamService } from '../team.service';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css']
})
export class AddTeamComponent implements OnInit {
  countries: string[];
  team: Team = new Team('', '', '', '', 0, 0, '');

  constructor(
      private teamService: TeamService,
      private router: Router
  ) { }

  ngOnInit() {
    this.countries = countries;
  }

  onSubmit() {
    // console.log(this.team);

      // après vérification des inputs (à faire...), ajout de l'équipe
    // au tableau teams détenu par teamService

      this.teamService.addTeam(this.team);
      this.router.navigate(['/teams']); // on redirige vers la page des equipes
  }


}
