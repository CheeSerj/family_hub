import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-calculate-timer',
  templateUrl: './calculate-timer.component.html',
  styleUrls: ['./calculate-timer.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CalculateTimerComponent implements OnInit {
  public dateForm: FormGroup = new FormGroup({
    dateStart: new FormControl(null),
    dateEnd: new FormControl(null)
  });

  public calcDiff(): void {
    const dateStart = this.dateForm.get('dateStart')?.value;
    const dateEnd = this.dateForm.get('dateEnd')?.value;
    const DIFF = new Date(dateEnd).getTime() - new Date(dateStart).getTime();
    alert(this.convertTimeStampToDateString(DIFF));
  }
  public convertTimeStampToDateString(timestamp: number): string {
    if (timestamp > 0) {
      let result = '';
      const timestampValue: { [key: string]: number } = {
        days: Math.floor(timestamp / (1000 * 3600 * 24)),
        hours: Math.floor((timestamp / (1000 * 3600)) % 24),
        minutes: Math.floor((timestamp / 1000 / 60) % 60)
      };
      const translate: { [key: string]: string } = {
        days: 'дн',
        hours: 'ч',
        minutes: 'мин'
      };
      Object.keys(timestampValue).forEach((key) => {
        if (timestampValue[key] !== 0) {
          result += timestampValue[key] + translate[key] + ' ';
        }
      });
      return result;
    }
    return '';
  }
}
