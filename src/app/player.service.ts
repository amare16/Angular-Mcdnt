import { Injectable } from '@angular/core';
import { Player} from '../model/Player';


@Injectable()
export class PlayerService {
  private player: Player[] = [
      new Player(1, 'dida.jpg', 'Dida', 'Nélson de Jesus Silva\n', 'Ac Milan', 'Brasil', 'gardien'),
      new Player(2, 'maldini.jpg', 'Maldini', 'Paolo', 'Ac Milan', 'Italie', 'deffenseur'),
      new Player(3, 'nesta.jpg', 'Nesta', 'Alessandro', 'Ac Milan', 'Italie', 'deffenseur'),
      new Player(4, 'cannavaro.jpg', 'Cannavaro', 'Fabio', 'Parma', 'Italie', 'deffenseur'),
      new Player(5, 'cafu.jpeg', 'Cafu', 'Marcos', 'Ac Milan', 'Brasil', 'deffenseur'),
      new Player(6, 'seedorf.jpg', 'Seedorf', 'Clarence', 'Ac Milan', 'Pays Bas', 'milieu de terrain'),
      new Player(7, 'vieira.jpg', 'Vieira', 'Patrick', 'Arsenal', 'France', 'milieu de terrain'),
      new Player(8, 'ronaldinho.jpg', 'Ronaldiniho', 'Gaucho', 'Barcelona', 'Brasil', 'milieu offensif'),
      new Player(9, 'riquelme.jpg', 'Requelme', 'Juan Roman', 'Villareal', 'Argentine', 'milieu offensif'),
      new Player(10, 'baggio.jpg', 'Baggio', 'Roberto', 'Juventus', 'Italie', 'attaquer'),
      new Player(11, 'ronaldo.jpg', 'Ronaldo', 'Luís Nazário de Lima\n', 'Real Madrid', 'Brasil', 'attaquer')

  ];

  constructor() { }

  public getPlayer() {
      return this.player;
  }

}
