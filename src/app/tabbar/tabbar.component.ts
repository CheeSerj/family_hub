import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-tabbar',
  templateUrl: './tabbar.component.html',
  styleUrls: ['./tabbar.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabbarComponent implements OnInit {
  items!: MenuItem[];

  activeItem!: MenuItem;

  ngOnInit(): void {
    this.items = [
      { label: 'Home', icon: 'pi pi-fw pi-home' },
      { label: 'Edit', icon: 'pi pi-fw pi-id-card' }
    ];

    this.activeItem = this.items[0];
  }
}
