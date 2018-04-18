import { Injectable } from '@angular/core';
import { Player} from '../model/Player';


@Injectable()
export class PlayerService {
  private player: Player[] = [
      new Player(1, 'dida.jpg', 'Dida', 'Nélson de Jesus Silva\n', 'Ac Milan', 'Brasil', 'Gardien de but'),
      new Player(2, 'maldini.jpg', 'Maldini', 'Paolo', 'Ac Milan', 'Italie', 'Defense Gauche'),
      new Player(3, 'nesta.jpg', 'Nesta', 'Alessandro', 'Ac Milan', 'Italie', 'Defense Milieu'),
      new Player(4, 'cannavaro.jpg', 'Cannavaro', 'Fabio', 'Parma', 'Italie', 'Libero'),
      new Player(5, 'cafu.jpeg', 'Cafu', 'Marcos', 'Ac Milan', 'Brasil', 'Defense Droit'),
      new Player(6, 'seedorf.jpg', 'Seedorf', 'Clarence', 'Ac Milan', 'Pays Bas', 'Milieu Axial'),
      new Player(7, 'vieira.jpg', 'Vieira', 'Patrick', 'Arsenal', 'France', 'Milieu Axial'),
      new Player(8, 'ronaldinho.jpg', 'Ronaldiniho', 'Gaucho', 'Barcelona', 'Brasil', 'Milieu Offensif'),
      new Player(9, 'riquelme.jpg', 'Requelme', 'Juan Roman', 'Villareal', 'Argentine', 'Milieu Offensif'),
      new Player(10, 'baggio.jpg', 'Baggio', 'Roberto', 'Juventus', 'Italie', 'Attaquer Soutien'),
      new Player(11, 'ronaldo.jpg', 'Ronaldo', 'Luís Nazário de Lima\n', 'Real Madrid', 'Brasil', 'Attaquer Axial')

  ];

  constructor() { }

  public getPlayer() {
      return this.player;
  }

}
