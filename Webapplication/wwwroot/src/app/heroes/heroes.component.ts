import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero-service';


@Component({
    selector: 'app-heroes',
    templateUrl: '/App/HeroesComponentTemplate',
    styleUrls: ['../../../dist/styles/heroes.component.css']
})
export class HeroesComponent implements OnInit {

    selectedHero: Hero;

    heroes = HEROES;

    constructor(private heroService: HeroService) { }

    ngOnInit() {
    }

    onSelect(hero: Hero): void {
        console.log("onSelect hero");
        this.selectedHero = hero;
    }
}