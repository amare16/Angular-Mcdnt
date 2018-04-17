import { Injectable } from '@angular/core';
import { Team } from '../model/Team';
import { Http } from '@angular/http';

const URL_SERVER = 'http://localhost:5000';

@Injectable()
export class TeamService {
    private colors: string[] = ['Rosso', 'Verde', 'Azzurro', 'Bianco', 'Nero'];
    private teams: Team[] = [
         new Team('Juventus', 'juve-logo.png', 'Allianz Arena', 'Allegri', 1897, 2, 'Italie'),
         new Team('AcMilan', 'acmilan-logo.png', 'Gatuso', 'San Siro', 1899, 7, 'Italie'),
         new Team('Buna Gebeya', 'ethioBuna-logo.jpg', 'Addis Abeba', 'Didier Gomes', 1976, 0, 'Ethiopie'),
         new Team('PSG', 'psg-logo.jpg', 'Unai Emery', 'Parc des Princes', 1970, 0, 'France'),
         new Team('Saint George', 'stgeorge-logo.png', 'Carlos Manuel Vaz Pinto', 'Addis Abeba', 1935, 0, 'Ethiopie')
    ];

    constructor(private http: Http) { }

    public getColors() {
        return this.colors;
    }

    public getTeams() {
        return this.teams;
    }

    public getTeamsFromServer() {
        //this.http.get(`${URL_SERVER}/teams`);
        this.http.get(`${URL_SERVER}/teams`)
            .map(res => res.json())
            .subscribe(res => {
            console.log(res);
            return res;
        });

        // Attention: requete asynchroome !!!
    }

    public getTeamByName(name: string): Team {
        let team: Team[] = [];
        team = this.teams.filter((t) => t.name == name);
        return team[0]; // renvoie l'objet de type Team placé à l'indice 0
    }

    public addTeam(team: Team) {
        this.teams.push(team);
    }

}
