import { Component} from "@angular/core";
import { Book } from '../../model/Book';

@Component({
    selector: 'app-intro',
    templateUrl: './intro.component.html'
})
export class IntroComponent {
    // title est la proprieter et app est la valeur
    // les proprietes sont publiques par defaut
    public title = 'Mon Premier application d\'Angularjs';
    message: string = '';
    message2: string = '';
    nb1: number = 14;
    nb2: number = 16;

    // exercice 1
    result: number = 0;

    admin_status: boolean = false;
    name: string = 'Amare';

    notes: number[] = [12, 8, 23, 14];
    stagiaires: string[] = ['Paul', 'Eric', 'Abdel', "Lea"];

    book = {
        title: "Germinal",
        author: "Zola",
        year: 1872,
        famous: true,
        //topics: ['Histoire', 'Politique', 'Drame']
        topics: [
            {labelEn: 'Histoire', labelFr: 'Histoire', labelIt: 'Storia'},
            {labelEn: 'Pollitic', labelFr: 'Politique', labelIt: 'Politica'},
            {labelEn: 'Drama', labelFr: 'Drame', labelIt: 'Drama'}
        ]
    };

    //book1: Book = new Book();
    //book1.setTitle('Game of Throne');

    // instanciation de la class Book
    book1: Book = new Book('Game of Thrones', 2001);
    // book1.setTitle('Game of Throes'); mauvais endroit pour appeler la methode

    test() {
        // console.log('le test functionne');
        // this.message = this.nb1 + this.nb2;

        // let result: number = this.nb1 + this.nb2;
        // console.log(result);
        // this.message = result.toString();

        // exercice 1
        this.result = this.result + 30;
        this.message = this.result.toString();
        // solution
        // if (this.result >= 120) {
        //     this.message2 = 'Bravo!';
        // }

        // d'aute facon
        if (this.result > 120) {
            if (this.admin_status) {
                this.message2 = 'Bravo M. l\'administrateur!';
            } else {
                this.message2 = 'Bravo!';
            }

        }

    }

    clear() {
        // console.log('le test functionne');
        this.message = '';
        this.message2 = '';
        // this.message++;
        // --this.message;
        // ++this.message;

        this.title = "fdlfjsdfjdjdj";
        this.result = 0;
    }



    onKeyUp(e) {
        //console.log('touche enfoncee et relevee');
        this.message2 += e.key;
    }
}