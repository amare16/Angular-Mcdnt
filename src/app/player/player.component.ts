import { Component, OnInit } from '@angular/core';
import { Player} from '../../model/Player';
import { current_teams, positions} from "../datasources";
import { PlayerService} from '../player.service';


@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  player: Player[] = [];
  playerFiltered: Player[] = [];

  player_display: string;
  current_teams: string[] = [];
  positions: string[] = [];

  currentTeamSelected: string = '0';
  positionSelected: string = '0';

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
    this.current_teams = current_teams;
    this.positions = positions;

    this.player = this.playerService.getPlayer();
    this.playerFiltered = this.player;
  }

  filterCurrentPlayer() {
    if (this.currentTeamSelected == '0') {
      this.playerFiltered = this.player;
    } else {
      this.playerFiltered = this.player.filter((player: Player) => player.current_team == this.currentTeamSelected);
    }

  }

  filterCurrentPlayers() {
      if (this.positionSelected == '0') {
          this.playerFiltered = this.player;
      } else {
          this.playerFiltered = this.player.filter((player: Player) => player.position == this. positionSelected);
      }
  }



}
