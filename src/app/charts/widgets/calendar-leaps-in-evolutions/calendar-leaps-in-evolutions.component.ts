import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { DATES_LEAPS } from '../../infrastructure/consts.dates-from-calendar';

@Component({
  selector: 'app-calendar-leaps-in-evolutions',
  templateUrl: './calendar-leaps-in-evolutions.component.html',
  styleUrls: ['./calendar-leaps-in-evolutions.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CalendarLeapsInEvolutionsComponent {
  public dateRange: Date[] = DATES_LEAPS;
  public date!: Date[];

  public selectDate(dates: any): void {
    console.log(dates);
  }
}
