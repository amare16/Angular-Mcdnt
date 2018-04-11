import {Component} from '@angular/core';


// decorateur le class
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    // title est la proprieter et app est la valeur
    // les proprietes sont publiques par defaut
    public title = 'Formation Angular';

}
