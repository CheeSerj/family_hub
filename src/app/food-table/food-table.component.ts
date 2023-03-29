import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

export interface Table{
  water: string;
  inPack: string;
  iDo: string;
  countWater: string;
}

@Component({
  selector: 'app-food-table',
  templateUrl: './food-table.component.html',
  styleUrls: ['./food-table.component.scss']
})
export class FoodTableComponent implements OnInit {

  public table: Table[] = [
    {water: '30гр', countWater: '30гр', inPack: '4,4гр', iDo: '5гр'},
    {water: '60гр', countWater: '60гр', inPack: '8,8гр', iDo: '9гр'},
    {water: '90гр', countWater: '90гр', inPack: '13,2гр', iDo: '13гр'},
    {water: '120гр', countWater: '120гр', inPack: '17,6гр', iDo: '18гр'},
    {water: '160гр', countWater: '160гр', inPack: '22,0гр', iDo: '22гр'},
    {water: '160гр', countWater: '190гр', inPack: '26,4гр', iDo: '27гр'},
    {water: '180гр', countWater: '210гр', inPack: '30,8гр', iDo: '32гр'}
  ]

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  public goToMenu() {
    this.router.navigate(['/']);
  }

}
