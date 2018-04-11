export class Book {
    public title: string;
    public author: string;
    public year: number;

    constructor(title: string, year: number) {
        this.setTitle(title);
        this.setYear(year);
    }

    public getTitle() {
        return this.title;
    }

    public getYear() {
        return this.title;
    }

    public setTitle(title: string) {
        this.title = title;
    }

    public setYear(year: number) {
        this.year = year;
    }
}
