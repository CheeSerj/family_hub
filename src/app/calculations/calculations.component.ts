import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculations',
  templateUrl: './calculations.component.html',
  styleUrls: ['./calculations.component.scss']
})
export class CalculationsComponent implements OnInit {
  public dateStart!: any
  public dateEnd!: any
  constructor() { }

  ngOnInit(): void {
  }

  public getDateStart(event: any){
    this.dateStart = event
  }
  public getDateEnd(event: any){
    this.dateEnd = event
  }

  public calcDiff(): void {
    let DIFF = this.dateEnd.getTime() - this.dateStart.getTime();

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
