import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
// app
import { MaterialModule } from './material.module';

const SHARED_MODULES: any[] = [
  CommonModule,
  ReactiveFormsModule,

  MaterialModule
];

@NgModule({
  imports: [ ...SHARED_MODULES ],
  exports: [ ...SHARED_MODULES ]
})
export class SharedModule {
}
