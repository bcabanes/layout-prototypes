import { NgModule } from '@angular/core';
import {
  MatListModule,
  MatSidenavModule,
  MatTabsModule,
  MatToolbarModule
} from '@angular/material';

// Material gesture support
import 'hammerjs';

const MATERIAL_MODULES: any[] = [
  MatListModule,
  MatSidenavModule,
  MatToolbarModule,
  MatTabsModule
];

@NgModule({
  imports: [ ...MATERIAL_MODULES ],
  exports: [ ...MATERIAL_MODULES ]
})
export class MaterialModule {
}
