import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { DialogData } from '../dialog-data';
import { Adjustment } from '../model';

@Component({
  selector: 'overview-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class OverviewDialog {
  private _formIsDefined: boolean = false;

  public formGroup: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<OverviewDialog>,
    @Inject(MAT_DIALOG_DATA) public data: Adjustment
  ) {
    this._formDefinition();
  }

  public get formIsDefined(): boolean {
    return this._formIsDefined;
  }

  public get disabled(): boolean {
    return this.formGroup.invalid;
  }

  public get gridList(): Adjustment[] {
    return this.data?.Adjustments.length > 0
      ? this.data.Adjustments.sort(this._sortList)
      : [];
  }

  public save(): void {
    if (this.formGroup.valid) {
      this.dialogRef.close(this.formGroup.value);
    }
  }

  public close(): void {
    this.dialogRef.close();
  }

  private _formDefinition(): void {
    this.formGroup = this._formBuilder.group({
      FromDate: [null, [Validators.required]],
      Capacity: [null, [Validators.required]],
      Reason: [null],
    });

    if (this.data != null) {
      this.formGroup.patchValue(this.data);
    }
    this._formIsDefined = true;
  }

  private _sortList(a: Adjustment, b: Adjustment): number {
    if (a.FromDate && b.FromDate) {
      if (a.FromDate.getTime() < b.FromDate.getTime()) return 1;
      if (a.FromDate.getTime() > b.FromDate.getTime()) return -1;
    }
    return 0;
  }

  public addAdjustment(dataItem: Adjustment): void {
    let newAdjustment: Adjustment = {
      Id: null,
      FromDate: null,
      Capacity: null,
      Reason: null,
    };
    // this.data.Adjustments.push(newAdjustment);
    // this.data.Adjustments = [].concat(this.data.Adjustments);
    this.data.Adjustments = [newAdjustment].concat(this.data.Adjustments);
  }
}
