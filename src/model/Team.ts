export class Team {
    private logo_folder: string = '/assets/img/logos/';
    name: string;
    logo: string;
    coach: string;
    stadium: string;
    founded: number;

    constructor(name: string, logo: string, coach: string, stadium: string, founded: number) {
        this.name = name;
        this.logo = logo;
        this.coach = coach;
        this.stadium = stadium;
        this.founded = founded;
    }

    getLogoUrl() {
        return this.logo_folder + this.logo;
    }

}