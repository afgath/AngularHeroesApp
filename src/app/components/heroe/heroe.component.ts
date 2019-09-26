import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { HeroesComponent } from '../heroes/heroes.component';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent {

  heroe: Heroe;
  casaImg: string;
  constructor( private activatedRoute: ActivatedRoute, private _heroeService: HeroesService ) {
    this.activatedRoute.params.subscribe(params => {
      this.heroe = this._heroeService.getHeroe(params['id']);
      if(this.heroe.casa === 'DC'){
        this.casaImg = 'assets/img/dc-house.png';
      }else{
        this.casaImg = 'assets/img/marvel-house.png';
      }
      console.log(this.heroe);
    });
   }

}
