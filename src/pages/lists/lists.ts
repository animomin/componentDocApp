import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Person } from '../../models/person';
import { DetailPage } from './detail/detail';

@Component({
    selector: 'page-lists',
    templateUrl: 'lists.html'
})
export class ListsPage {
    persons: Person[] = [];
    constructor(public navCtrl: NavController) {
        this.persons.push(new Person('assets/img/card-amsterdam.png', 'amsterdam', 'this is amsterdam'));
        this.persons.push(new Person('assets/img/card-madison.png', 'madison', 'this is madison'));
        this.persons.push(new Person('assets/img/card-saopaolo.png', 'saopaolo', 'this is saopaolo'));
        this.persons.push(new Person('assets/img/card-sf.png', 'sf', 'this is sf'));
    }

    openDetailPage(person){        
        this.navCtrl.push(DetailPage,{
            profileImage : person.avatar,
            name : person.name,
            detail : person.detail
        });
    }

}
