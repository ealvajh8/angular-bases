import { Component } from "@angular/core";

@Component({
    selector : 'app-counter',
    template : `
    <h3>{{ counter }}</h3>

    <button (click)="Plus()" >+</button>
    <button (click)="Minus()" >-</button>
    <button (click)="Reset()" >Reset</button>
    `
})

export class CounterComponent{

    public counter: number = 1;

    Plus(): void {
      this.counter++;
    }
  
    Minus(): void{
      this.counter--;
    }
  
    Reset(){
      this.counter = 0;
    }
}