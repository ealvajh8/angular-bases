import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Output()
  public onDeleteEmitter: EventEmitter<string> = new EventEmitter();


  @Input()
  public characterList: Character[] = [{
      name: 'Trunks',
      power: 10
    }
  ];

  onDeleteCharacter(id?:string){
    // this.onDeleteEmitter.emit(index);

    // si el valor es undefined
    if(!id) return;

    this.onDeleteEmitter.emit(id);
  }
}
