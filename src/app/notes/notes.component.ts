import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotesComponent implements OnInit, OnDestroy {
  ngOnDestroy(): void {
    document.body.style.background = '#ffffff';
  }

  ngOnInit(): void {
    document.body.style.background = 'var(--indigo-200)';
  }
}
