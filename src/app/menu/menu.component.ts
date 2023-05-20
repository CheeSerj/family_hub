import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  constructor(private router: Router) { }

  public ngOnInit(): void {
  }

  public goToCalculate() {
    this.router.navigate(['calculate']).catch();
  }

  public goToTable() {
    this.router.navigate(['table']).catch();
  }
}
