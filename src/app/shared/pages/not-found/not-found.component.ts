import { ChangeDetectionStrategy, Component, OnDestroy, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotFoundComponent implements OnDestroy {
  ngOnDestroy(): void {
    console.log('asdasdasd');
  }
}
