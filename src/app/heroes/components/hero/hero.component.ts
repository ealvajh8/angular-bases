import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = 'ironman' ;
  public age:  number = 45;
  public newName: boolean = true;
  // public method: string = 'Algun metodo';
  // public nameCapitalized: string = 'Ironman';

  // one way data binding - clase 46
  get CapitalizedName(): string{
    return this.name.toUpperCase();
  }

  GetHeroDescription():string {
    return `${this.name} | ${this.age}`;
  }

  ChangeName(): void {
    this.name = "Spiderman";
    this.newName = false;
  }
  
  ChangeAge(): void{
    this.age++;
  }

  Reset(): void{
    this.age = 45;
    this.name = 'ironman';
    this.newName = true;
  }

}
