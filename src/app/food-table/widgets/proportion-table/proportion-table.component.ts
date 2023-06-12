import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-proportion-table',
  templateUrl: './proportion-table.component.html',
  styleUrls: ['./proportion-table.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProportionTableComponent {
  public table: { water: string; blend: string }[] = [
    { water: '30гр', blend: '5гр' },
    { water: '60гр', blend: '9гр' },
    { water: '90гр', blend: '13гр' },
    { water: '120гр', blend: '18гр' },
    { water: '160гр', blend: '27гр' },
    { water: '180гр', blend: '32гр' }
  ];
}
