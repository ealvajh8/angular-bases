import { Component } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { DbzService } from '../../services/dbz.service';

@Component({
    selector: 'app-dbz-main-page',
    templateUrl: './main-page.component.html'
})

export class MainPageComponent {

    constructor(private dbzService: DbzService) {}

    // Operador ...spread genera una copia del valor original
    get characters() {
       return [...this.dbzService.characters];
    }

    public onNewReceiver(character:Character){
        this.dbzService.onNewReceiver(character);
    }

    public onDeleteReceiver(id:string){
        this.dbzService.onDeleteReceiver(id);
    }
}