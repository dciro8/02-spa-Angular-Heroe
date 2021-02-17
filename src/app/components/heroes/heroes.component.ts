import { Component, OnInit } from '@angular/core';

import { HeroeService } from '../../servicios/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor(private _heroesService: HeroeService) {

   }

  ngOnInit(): void {
  }

}