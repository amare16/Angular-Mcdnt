import { Component, OnInit } from '@angular/core';
import { Team } from '../../model/Team';
import { countries } from '../datasources';
import { TeamService} from '../team.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

    // team: Team = new Team('Juventus', 'juve-logo.png', 'Allegri', 1897);
    teams: Team[] = [];
    teamsFiltered: Team[] = []; // tableau servant a stocker les retours de la function .filter

    team_display: string;
    countries: string[] = [];
    test: boolean = true;
    countrySelected: string = '0';

  constructor(private  teamService: TeamService) { }

  ngOnInit() {
      this.countries = countries;
      this.team_display = 'a2';
      // let team1: Team = new Team('Juventus', 'juve-logo.png', 'Allianz Arena', 'Allegri', 1897, 2, 'Italie');
      // let team2: Team = new Team('AcMilan', 'acmilan-logo.png', 'Gatuso', 'San Siro', 1899, 7, 'Italie');
      // let team3: Team = new Team('Buna Gebeya', 'ethioBuna-logo.jpg', 'Addis Abeba', 'Didier Gomes', 1976, 0, 'Ethiopie');
      // let team4: Team = new Team('PSG', 'psg-logo.jpg', 'Unai Emery', 'Parc des Princes', 1970, 0, 'France');
      // let team5: Team = new Team('Saint George', 'stgeorge-logo.png', 'Carlos Manuel Vaz Pinto', 'Addis Abeba', 1935, 0, 'Ethiopie');

      // this.teams = [team1, team2, team3, team4, team5]; // initialisation de teams
      this.teams = this.teamService.getTeams(); // initialisation de teams
      this.teamsFiltered = this.teams; // initialisation de teamsFiltered
  }

  // // affecter le source de donnee ( this.teams)
  // addTeam() {
  //     let steaua: Team = new Team('Steaua', 'psg-logo.jpg', 'Vlad Tepes', 'Ghencea', 1602, 6, 'Roumanie');
  //
  //     // ajout de l'objet steaua au tableau this.teams
  //     this.teams.push(steaua);
  //     //this.teams.splice(0,1);
  // }

  filterTeam() {
      // console.log(this.countrySelectd);

      if (this.countrySelected == '0') {
          // l'utilisateur n'a pas choisi de pays => afficher toutes les equipes
          this.teamsFiltered = this.teams;
      } else {
          this.teamsFiltered = this.teams.filter((team: Team) => team.country == this.countrySelected);
      }



  }


}
