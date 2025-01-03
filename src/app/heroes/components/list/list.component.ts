import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html'
  // styleUrl: './list.component.css'
})
export class ListComponent {

  public heroNames: string[] = 
  [
    'Spiderman', 
    'Ironman',
    'Hulk',
    'She-Hulk',
    'Thor'
  ];

  public deletedHeroe?: string = '';

  RemoveLastHero():void {
    const deletedHeroe = this.heroNames.pop();
    this.deletedHeroe = deletedHeroe;
  }

}
