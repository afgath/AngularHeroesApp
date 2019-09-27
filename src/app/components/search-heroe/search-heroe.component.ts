import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';




@Component({
  selector: 'app-search-heroe',
  templateUrl: './search-heroe.component.html',
})
export class SearchHeroeComponent implements OnInit {

  heroes: Heroe[] = [];
  term: string;
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private _heroeService: HeroesService) { }

  ngOnInit(  ) {
    this.activatedRoute.params.subscribe(params => {
      this.term = params.word;
      this.heroes = this._heroeService.buscarHeroes(params.word);
      console.log(this.heroes);
    });
  }

  verHeroe(idx: number) {
    this.router.navigate(['/heroe', idx]);
  }

}
