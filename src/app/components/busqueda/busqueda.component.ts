import { Component, OnInit } from '@angular/core';

import {ActivatedRoute} from '@angular/router'

import {Heroe, HeroeService} from '../../servicios/heroes.service'

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html'
})
export class BusquedaComponent implements OnInit  {

  heroes:any[]= [];
  busqueda: string;
  
  constructor(private _ctivatedRoute: ActivatedRoute,
    private _heroeService:HeroeService) {
}

ngOnInit(){
   
  this._ctivatedRoute.params.subscribe(param =>{
    // this.heroe=this._heroeService.buscarHeroes(param['busquedaHeroe'])

   this. busqueda=param['busquedaHeroe'];
    this.heroes=this. _heroeService.buscarHeroes(param['busquedaHeroe']);

    console.log(this.heroes);

  }) ;
}

}
