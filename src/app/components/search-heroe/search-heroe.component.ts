import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroeComponent } from '../heroe/heroe.component';




@Component({
  selector: 'app-search-heroe',
  templateUrl: './search-heroe.component.html',
})
export class SearchHeroeComponent implements OnInit {

  heroes: Heroe[] = [];
  router: Router;
  constructor(private activatedRoute: ActivatedRoute, private _heroeService: HeroesService) { }

  ngOnInit(  ) {
    this.activatedRoute.params.subscribe(params => {
      this.heroes = this._heroeService.buscarHeroes(params.word);
      console.log(this.heroes);
    });
  }

  verHeroe(idx: number) {
    this.router.navigate(['/heroe', idx]);
  }

}
