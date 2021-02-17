import { Component, OnInit } from '@angular/core';

import { HeroeService,Heroe } from '../../servicios/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[]=[];

  constructor(private _heroesService: HeroeService) {
    console.log("Construct");

   }

  ngOnInit(): void {
    console.log("ngOnInit");
    this.heroes = this._heroesService.getHeroes();
    console.log(this.heroes);
    
  }

}