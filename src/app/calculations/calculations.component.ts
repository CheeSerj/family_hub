import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-calculations',
  templateUrl: './calculations.component.html',
  styleUrls: ['./calculations.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CalculationsComponent implements OnInit {
  public dateForm: FormGroup = new FormGroup({
    dateStart: new FormControl(null),
    dateEnd: new FormControl(null)
  })


  constructor(public router: Router) { }

  ngOnInit(): void {
  }


  public goToMenu() {
    this.router.navigate(['/']);
  }

  public calcDiff(): void {
    const dateStart = this.dateForm.get('dateStart')?.value
    const dateEnd = this.dateForm.get('dateEnd')?.value
    console.log(this.dateForm.get('dateStart')?.value)
    let DIFF = new Date(dateEnd).getTime() - new Date(dateStart).getTime()

    const DAY_DIFF = Math.floor(DIFF/1000/60/60/24);
    DIFF -= DAY_DIFF*1000*60*60*24

    const HOURS_DIFF = Math.floor(DIFF/1000/60/60);
    DIFF -= HOURS_DIFF*1000*60*60

    const MINUTES_DIFF = Math.floor(DIFF/1000/60);
    DIFF -= MINUTES_DIFF*1000*60

    const SEC_DIFF = Math.floor(DIFF/1000);

    alert(HOURS_DIFF + ' Часов ' + MINUTES_DIFF + ' Минут ');
  }
}
