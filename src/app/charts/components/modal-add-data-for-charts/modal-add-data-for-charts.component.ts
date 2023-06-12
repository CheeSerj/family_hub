import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { chartsDropDown, monthDropDown } from '../../infrastructure';
import { DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-modal-add-data-for-charts',
  templateUrl: './modal-add-data-for-charts.component.html',
  styleUrls: ['./modal-add-data-for-charts.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModalAddDataForChartsComponent {
  public addDataForm: FormGroup = new FormGroup({
    chart: new FormControl(null, [Validators.required]),
    month: new FormControl(null, [Validators.required]),
    params: new FormControl(null, [Validators.required])
  });
  public chartDD = chartsDropDown;
  public monthDD = monthDropDown;

  constructor(public ref: DynamicDialogRef) {}

  public submitForm(): void {
    const submit = {
      chart: this.addDataForm.get('chart')?.value.key,
      month: this.addDataForm.get('month')?.value.name,
      params: this.addDataForm.get('params')?.value
    };
    this.ref.close(submit);
    console.log(submit);
  }

  public closeDialog() {
    this.ref.close();
  }
}
