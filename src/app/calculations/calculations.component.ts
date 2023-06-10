import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-calculations',
  templateUrl: './calculations.component.html',
  styleUrls: ['./calculations.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CalculationsComponent implements OnInit, OnDestroy {
  constructor(public router: Router) {}

  ngOnDestroy(): void {
    document.body.style.background = '#ffffff';
  }

  ngOnInit(): void {
    document.body.style.background = 'var(--purple-100)';
  }
}
