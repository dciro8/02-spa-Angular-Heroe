import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import {Heroe, HeroeService} from '../../servicios/heroes.service'

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent  {

  heroe: any= {};

  constructor(private _ctivatedRoute: ActivatedRoute,
     private _heroeService:HeroeService) {


    this._ctivatedRoute.params.subscribe(param =>{
      this.heroe=this._heroeService.getHeroe(param['id'])

      console.log(this.heroe);
    }) ;
   }

}
