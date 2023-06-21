import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-calculate-timer',
  templateUrl: './calculate-timer.component.html',
  styleUrls: ['./calculate-timer.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CalculateTimerComponent {
  public dateForm: FormGroup = new FormGroup({
    dateStart: new FormControl(null),
    dateEnd: new FormControl(null)
  });

  public translateString: { [key: string]: string } = {
    days: 'дн',
    hours: 'ч',
    minutes: 'мин'
  };

  public calcDiff(): void {
    const dateStart = this.dateForm.get('dateStart')?.value;
    const dateEnd = this.dateForm.get('dateEnd')?.value;
    const DIFF = new Date(dateEnd).getTime() - new Date(dateStart).getTime();
    alert(this.converterTimeStampNumberToString(DIFF));
  }

  public converterTimeStampNumberToString(timestamp: number): string {
    if (timestamp > 0) {
      let result = '';
      const timestampNumber: { [key: string]: number } = {
        days: Math.floor(timestamp / (1000 * 3600 * 24)),
        hours: Math.floor((timestamp / (1000 * 3600)) % 24),
        minutes: Math.floor((timestamp / 1000 / 60) % 60)
      };
      Object.keys(timestampNumber).forEach((key) => {
        if (timestampNumber[key] !== 0) {
          result += timestampNumber[key] + this.translateString[key] + ' ';
        }
      });
      return result;
    }
    return '';
  }
}
