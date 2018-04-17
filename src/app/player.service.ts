import { Injectable } from '@angular/core';
import { Player} from '../model/Player';


@Injectable()
export class PlayerService {
  private player: Player[] = [
      new Player(1, 'img', 'Delpero', 'Jovani', 'Juventus', 'Italie', 'attaquer')
  ];

  constructor() { }

  public getPlayer() {
      return this.player;
  }

}
