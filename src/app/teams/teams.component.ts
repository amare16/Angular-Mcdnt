import { Component, OnInit } from '@angular/core';
import { Team } from '../../model/Team';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

    // team: Team = new Team('Juventus', 'juve-logo.png', 'Allegri', 1897);
    teams: Team[] = [];
    team_display: string;

  constructor() { }

  ngOnInit() {
      this.team_display = 'a1';
      let team1: Team = new Team('Juventus', 'juve-logo.png', 'Allianz Arena', 'Allegri', 1897);
      let team2: Team = new Team('AcMilan', 'acmilan-logo.png', 'Gatuso', 'San Siro', 1899);
      let team3: Team = new Team('Buna Gebeya', 'ethioBuna-logo.jpg', 'Addis Abeba', 'Didier Gomes', 1976);
      let team4: Team = new Team('PSG', 'psg-logo.jpg', 'Unai Emery', 'Parc des Princes', 1970);
      let team5: Team = new Team('Saint George', 'stgeorge-logo.png', 'Carlos Manuel Vaz Pinto', 'Addis Abeba', 1935);

      this.teams = [team1, team2, team3, team4, team5];
  }

}
