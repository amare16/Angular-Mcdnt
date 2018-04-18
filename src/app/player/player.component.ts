import { Component, OnInit } from '@angular/core';
import { Player} from '../../model/Player';
import { countries} from "../datasources";
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

  constructor(private playerService: PlayerService) { }

  ngOnInit() {

    this.player = this.playerService.getPlayer();
    this.playerFiltered = this.player;
  }

}
