import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
// app
import { MaterialModule } from './material.module';

const SHARED_MODULES: any[] = [
  CommonModule,
  FormsModule,

  FlexLayoutModule,
  MaterialModule
];

@NgModule({
  imports: [ ...SHARED_MODULES ],
  exports: [ ...SHARED_MODULES ]
})
export class SharedModule {
}
