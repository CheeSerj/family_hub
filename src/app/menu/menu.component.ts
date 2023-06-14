import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { MessageService } from 'primeng/api';
import { NotificationService } from '../shared/services';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnDestroy, OnInit {
  public getNotify!: Observable<boolean>;
  public subscription: Subscription = new Subscription();

  constructor(private router: Router, private messageService: MessageService, public notification: NotificationService) {}

  ngOnInit(): void {
    this.getNotify = this.notification.checkValidDate;
    this.subscription.add(this.getNotify.subscribe((res) => (res ? this.sendNotify() : false)));
  }

  public sendNotify(): void {
    this.messageService.add({
      severity: 'info',
      summary: `Сейчас идет критическая неделя скачка развития`,
      detail: 'Возможен бунт 😂',
      key: 'app'
    });
  }

  public goToCalculate(): void {
    this.router.navigate(['calculate']).catch();
  }

  public goToTable(): void {
    this.router.navigate(['table']).catch();
  }

  public goToCharts(): void {
    this.router.navigate(['charts']).catch();
  }

  public goToNotes(): void {
    this.router.navigate(['notes']).catch();
  }

  ngOnDestroy(): void {
    this.messageService.clear('app');
    this.subscription.unsubscribe();
  }
}
