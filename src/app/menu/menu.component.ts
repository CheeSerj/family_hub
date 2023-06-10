import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  constructor(private router: Router) {}

  public goToCalculate() {
    this.router.navigate(['calculate']).catch();
  }

  public goToTable() {
    this.router.navigate(['table']).catch();
  }

  public goToCharts() {
    this.router.navigate(['charts']).catch();
  }
}
