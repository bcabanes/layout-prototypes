import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-dialog',
  template: `
    <form #form="ngForm" (ngSubmit)="dialogRef.close(form.value)" ngNativeValidate>
      <div fxLayout="column" fxLayoutGap="8px">
        <mat-form-field>
          <input matInput ngModel type="text" name="name" placeholder="Full name" required>
        </mat-form-field>

        <mat-form-field>
          <input matInput ngModel type="text" name="picture" placeholder="Picture url" required>
        </mat-form-field>

        <mat-form-field>
          <input matInput ngModel type="email" name="email" placeholder="Email" required>
        </mat-form-field>

        <div fxLayout="row" fxLayoutGap="24px">
          <mat-checkbox ngModel name="emailVerified">Is Email verified?</mat-checkbox>
        </div>
      </div>
      <mat-dialog-actions align="end">
        <button mat-button type="button" (click)="dialogRef.close()">Cancel</button>
        <button mat-button color="accent">Save User</button>
      </mat-dialog-actions>
    </form>
  `
})
export class DialogComponent {

  constructor(public dialogRef: MatDialogRef<DialogComponent>) {
  }
}
