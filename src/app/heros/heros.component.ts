import { Component, OnInit } from '@angular/core';
import {Hero} from '../models/hero';
import {HeroService} from '../services/hero-service';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {
  selectedHero: Hero = null;
  heros: any = [];

  constructor(heroService: HeroService) {
    this.heros = heroService.getHeros();
   }

  ngOnInit() {
  }

  onSelectHero(hero) {
    this.selectedHero = hero;
  }

}
