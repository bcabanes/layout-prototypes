import { Component } from '@angular/core';

@Component({
  selector: 'app-dialog',
  template: `
    <h3 mat-dialog-title>Some Dialog</h3>

    <mat-dialog-content>
      This is the dialog content.
    </mat-dialog-content>
  `
})
export class DialogComponent {
}
