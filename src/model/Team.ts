export class Team {
    private logo_folder: string = '/assets/img/logos/';
    name: string;
    logo: string;
    coach: string;
    stadium: string;
    founded: number;
    nbCup: number;
    country: string;

    // hydratation ici
    constructor(name: string, logo: string, coach: string, stadium: string, founded: number, nbCup: number, country: string) {
        this.name = name;
        this.logo = logo;
        this.coach = coach;
        this.stadium = stadium;
        this.founded = founded;
        this.nbCup = nbCup;
        this.country = country;
    }

    getLogoUrl() {
        let external: boolean = this.logo.substr(0,4) == 'http';
        return external ? this.logo: this.logo_folder + this.logo;
    }


}