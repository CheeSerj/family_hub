import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { PRIME_CONFIG } from './prime-config';
import { registerLocaleData } from '@angular/common';
import Ru from '@angular/common/locales/ru';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Дашкины штучки';
  constructor(private primeConfig: PrimeNGConfig) {}

  public ngOnInit(): void {
    this.primeConfig.setTranslation(PRIME_CONFIG);
    registerLocaleData(Ru);
  }
}
