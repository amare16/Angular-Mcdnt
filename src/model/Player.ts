export class Player {
    id: number;
    picture: string;
    first_name: string;
    last_name: string;
    current_team: string;
    country: string;
    position: string;


    constructor(id: number, picture: string, first_name: string, last_name: string, current_team: string, country: string, positon: string) {
        this.id = id;
        this.picture = picture;
        this.first_name = first_name;
        this.last_name = last_name;
        this.current_team = current_team;
        this.country = country;
        this.position = positon;
    }

    // i will include something here
}