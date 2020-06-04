import { Component } from '@angular/core';
import {Hero} from './hero';
@Component({
  selector: 'app-root',
  template: `
  <h1>{{title}}</h1>
  <h2>My favorite hero is: {{myHero.name}}</h2>
  <p>Heroes:</p>
  <ul>
    <li *ngFor="let hero of heroes">
      {{ hero.name }}
      </li>
  </ul>
  <p *ngIf="heroes.length > 3">There are many heroes!</p>
`
})
export class AppComponent {
  title = 'Tour of Heroes';
  heroes = [
    new Hero(1, "Zuzia"),
    new Hero(20, 'Ania'),
    new Hero(13, "Mateusz"),
    new Hero(15, "Łukasz"),

  ];
  myHero =  this.heroes[0];

}
