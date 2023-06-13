import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { chartsDropDown, monthDropDown } from '../../infrastructure';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { FormAddDataOnChart } from '../../types/form-add-data-on-chart.interfaces';

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
    const submit: FormAddDataOnChart = {
      chart: this.addDataForm.get('chart')?.value.key,
      month: this.addDataForm.get('month')?.value.name,
      params: this.addDataForm.get('params')?.value,
      id: this.addDataForm.get('chart')?.value.id
    };
    this.ref.close(submit);
  }

  public closeDialog() {
    this.ref.close();
  }
}
