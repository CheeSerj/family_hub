import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-calculations',
  templateUrl: './calculations.component.html',
  styleUrls: ['./calculations.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CalculationsComponent implements OnInit, OnDestroy {
  public dateForm: FormGroup = new FormGroup({
    dateStart: new FormControl(null),
    dateEnd: new FormControl(null)
  })

  constructor(public router: Router) {
  }

  ngOnDestroy(): void {
    document.body.style.background = "#ffffff"
  }

  ngOnInit(): void {
    document.body.style.background = "var(--purple-100)"
  }


  public goToMenu() {
    this.router.navigate(['/']).catch();
  }

  public calcDiff(): void {
    const dateStart = this.dateForm.get('dateStart')?.value
    const dateEnd = this.dateForm.get('dateEnd')?.value
    let DIFF = new Date(dateEnd).getTime() - new Date(dateStart).getTime()
    alert(this.convertTimeStampToDateString(DIFF))
  }

  public convertTimeStampToDateString(timestamp: number): string{
    if (timestamp > 0){
      let result = '';
      const timestampValue: { [key: string]: number} = {
        days: Math.floor(timestamp / (1000 * 3600 * 24)),
        hours: Math.floor((timestamp / (1000 * 3600)) % 24),
        minutes: Math.floor((timestamp / 1000 / 60) % 60)
      };
      const translate: {[key: string]: string} = {
        days: 'дн',
        hours: 'ч',
        minutes: 'мин'
      };
      Object.keys(timestampValue).forEach(key => {
        if (timestampValue[key] !== 0){
          result += timestampValue[key] + translate[key] + ' ';
        }
      });
      return result;
    }
    return ''
  }
}
