import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CRITICAL_DATES } from '../infrastructure';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  public checkValidDate: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public dateCheckForNotify(): void {
    const currentDate = new Date().toDateString();
    CRITICAL_DATES.find((date) => {
      date.toDateString() === currentDate ? this.checkValidDate.next(true) : false;
    });
  }
}
