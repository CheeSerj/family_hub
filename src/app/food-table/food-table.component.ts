import {ChangeDetectorRef, Component, DoCheck, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {Router} from "@angular/router";

export interface Table{
  water: string;
  blend: string;
}

@Component({
  selector: 'app-food-table',
  templateUrl: './food-table.component.html',
  styleUrls: ['./food-table.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FoodTableComponent implements OnInit, OnDestroy {

  public table: Table[] = [
    {water: '30гр',  blend: '5гр'},
    {water: '60гр',  blend: '9гр'},
    {water: '90гр',  blend: '13гр'},
    {water: '120гр', blend: '18гр'},
    {water: '160гр', blend: '27гр'},
    {water: '180гр', blend: '32гр'}
  ]

  constructor(public router: Router) { }

  ngOnDestroy(): void {
    document.body.style.background = "#ffffff"
    }

  ngOnInit(): void {
    document.body.style.background = "var(--pink-200)"
  }

  public goToMenu() {
    this.router.navigate(['/']).catch();
  }

}
