import { NgModule } from '@angular/core';
import { MatSidenavModule, MatToolbarModule } from '@angular/material';

// Material gesture support
import 'hammerjs';

const MATERIAL_MODULES: any[] = [
  MatSidenavModule,
  MatToolbarModule
];

@NgModule({
  imports: [ ...MATERIAL_MODULES ],
  exports: [ ...MATERIAL_MODULES ]
})
export class MaterialModule {
}
