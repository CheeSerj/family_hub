import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-charts-layout',
  templateUrl: './charts-layout.component.html',
  styleUrls: ['./charts-layout.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChartsLayoutComponent implements OnInit, OnDestroy {
  public checked = true;

  ngOnDestroy(): void {
    document.body.style.background = '#ffffff';
  }

  ngOnInit(): void {
    document.body.style.background = 'var(--teal-100)';
  }
}
