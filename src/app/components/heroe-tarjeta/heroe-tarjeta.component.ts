import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

import { Router} from '@angular/router';
@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {

  @Input() heroe: any = {};
  @Input()  index: number;
  @Input()  busqueda: string;

  @Output() heroeSeleccionado: EventEmitter<number>;

  constructor(private _router:Router) {
    this.heroeSeleccionado = new EventEmitter();
   }

  ngOnInit(): void {
  }

  verHeroe()
  {
    console.log(this.index);

    // this.heroeSeleccionado = new EventEmitter();
    // this._router.navigate(['/heroe',this.index])

    this.heroeSeleccionado.emit(this.index);
  }


  buscarHeroe()
  {
    console.log( this.busqueda );

    console.log('si sisi señores de corazon');
    this._router.navigate(['/busqueda',this.busqueda]);
  }


}
