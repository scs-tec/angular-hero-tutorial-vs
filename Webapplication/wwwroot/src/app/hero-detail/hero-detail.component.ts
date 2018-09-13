import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';

@Component({
    selector: 'app-hero-detail',
    templateUrl: '/app/HeroDetailComponentTemplate',
    styleUrls: ['../../../dist/styles/hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

    @Input() hero: Hero;

    constructor() { }

    ngOnInit() {
    }

}