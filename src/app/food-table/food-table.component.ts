import { ChangeDetectorRef, Component, DoCheck, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

export interface Table {
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
  constructor(public router: Router) {}

  ngOnDestroy(): void {
    document.body.style.background = '#ffffff';
  }

  ngOnInit(): void {
    document.body.style.background = 'var(--pink-100)';
  }
}
